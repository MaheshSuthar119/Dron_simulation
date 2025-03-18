import React, { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import FileUpload from "./components/FileUpload";
import Controls from "./components/Controls";
import WeatherMonitor from "./components/WeatherMonitor";
import "./App.css";


const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [index, setIndex] = useState(0);
  const [visited, setVisited] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1.0);
  const [returning, setReturning] = useState(false);
  const [completed, setCompleted] = useState(false); // Track if journey is completed

  useEffect(() => {
    let interval;
    if (playing && coordinates.length > 0 && !completed) {
      interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (!returning && prevIndex + 1 < coordinates.length) {
            setVisited((prevVisited) => [...prevVisited, coordinates[prevIndex + 1]]);
            return prevIndex + 1;
          }

          if (!returning && prevIndex + 1 === coordinates.length) {
            setReturning(true);
            return prevIndex;
          }

          if (returning && prevIndex > 0) {
            return prevIndex - 1;
          }

          if (returning && prevIndex === 0) {
            setReturning(false);
            setPlaying(false);
            setCompleted(true); // Mark as completed
          }

          return prevIndex;
        });
      }, 1000 / speed);
    }

    return () => clearInterval(interval);
  }, [playing, coordinates, index, returning, speed, completed]);

  const handlePlayPause = () => {
    if (completed) {
      // Reset state and start over if journey was completed
      setIndex(0);
      setVisited([coordinates[0]]);
      setReturning(false);
      setCompleted(false);
    }
    setPlaying(!playing);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Drone Simulator</h1>
      <FileUpload 
        setCoordinates={(data) => { 
          setCoordinates(data); 
          setIndex(0); 
          setVisited([]); 
          setPlaying(false); 
          setReturning(false);
          setCompleted(false);
        }} 
      />
      <Controls 
        speed={speed} 
        setSpeed={setSpeed} 
        isPlaying={playing} 
        setIsPlaying={handlePlayPause} 
      />
      <MapComponent coordinates={coordinates} index={index} visited={visited} />
      <WeatherMonitor coordinates={coordinates} index={index} />
    </div>
  );
};

export default App;

