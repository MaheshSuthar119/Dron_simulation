import React, { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import FileUpload from "./components/FileUpload";
import Controls from "./components/Controls";

const App = () => {
  const [coordinates, setCoordinates] = useState([]); // All coordinates
  const [index, setIndex] = useState(0); // Current position
  const [visited, setVisited] = useState([]); // Stores visited locations
  const [playing, setPlaying] = useState(false); // Play/Pause state

  useEffect(() => {
    let interval;
    if (playing && coordinates.length > 0 && index < coordinates.length) {
      interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex + 1 < coordinates.length) {
            setVisited((prevVisited) => [...prevVisited, coordinates[prevIndex + 1]]);
            return prevIndex + 1; // Move to the next coordinate
          }
          setPlaying(false); // Stop at the last coordinate
          return prevIndex;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [playing, coordinates, index]);

  return (
    <div>
      <h1>Drone Simulator</h1>
      <FileUpload setCoordinates={(data) => { 
        setCoordinates(data); 
        setIndex(0); 
        setVisited([]); // Reset visited when a new file is uploaded
        setPlaying(false); // Ensure it starts fresh
      }} />
      <Controls playing={playing} setPlaying={setPlaying} />
      <MapComponent coordinates={coordinates} index={index} visited={visited} />
    </div>
  );
};

export default App;
