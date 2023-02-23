import { useState } from "react";
import "./VolumeSlider.scss";

export default function VolumeSlider(props) {
  const [volume, setVolume] = useState(50);

  function handleVolumeChange(event) {
    setVolume(event.target.value);
  }

  return (
    <div id="volumeSlider">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p id="rangeValue">{volume}</p>
    </div>
  );
}
