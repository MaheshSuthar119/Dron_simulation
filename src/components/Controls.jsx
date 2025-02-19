import React from "react";

const Controls = ({ playing, setPlaying }) => {
  return (
    <button onClick={() => setPlaying(!playing)}>
      {playing ? "Pause" : "Play"}
    </button>
  );
};

export default Controls;
