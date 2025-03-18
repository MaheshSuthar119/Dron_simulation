import React from "react";
import { Slider } from "@mui/material";
import { PlayCircle, PauseCircle } from "lucide-react";

const Controls = ({ speed, setSpeed, isPlaying, setIsPlaying }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-full max-w-md">
      <div className="flex items-center justify-between w-full space-x-4">
        <button
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
        
        {/* Box around Drone Speed and Slider */}
        <div 
          className="flex flex-col items-center p-4 rounded-lg border-2 border-black bg-gray-100" 
          style={{ width: "30vw" }}
        >
          <p className="text-gray-600 font-medium mb-1">Drone Speed</p>
          <Slider
            value={speed}
            min={0.5}
            max={2.0}
            step={0.1}
            onChange={(e, newValue) => setSpeed(newValue)}
            valueLabelDisplay="auto"
            sx={{ width: "100%" }} // Ensures slider takes full width of the container
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;


