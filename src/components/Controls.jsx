import React from "react";

const Controls = ({ playing, setPlaying }) => {
  return (
    <button onClick={() => setPlaying(prev => !prev)}>
      {playing ? "Pause ⏸️" : "Play ▶️"}
    </button>
  );
};

export default Controls;
