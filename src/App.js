import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import FileUpload from "./components/FileUpload";
import Controls from "./components/Controls";

const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  React.useEffect(() => {
    if (playing && coordinates.length > 0 && index < coordinates.length) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [playing, coordinates, index]);

  return (
    <div>
      <h1>Drone Simulator</h1>
      <FileUpload setCoordinates={setCoordinates} />
      <Controls playing={playing} setPlaying={setPlaying} />
      <MapComponent coordinates={coordinates} index={index} />
    </div>
  );
};

export default App;
