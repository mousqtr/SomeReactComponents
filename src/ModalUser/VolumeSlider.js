import { useState } from "react";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import "./VolumeSlider.scss";

export default function VolumeSlider(props) {
  const [volume, setVolume] = useState(50);

  function handleVolumeChange(event) {
    setVolume(event.target.value);
  }

  return (
    <div id="volumeSlider" className="center-row">
      <BsFillVolumeMuteFill />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <BsFillVolumeUpFill />
    </div>
  );
}
