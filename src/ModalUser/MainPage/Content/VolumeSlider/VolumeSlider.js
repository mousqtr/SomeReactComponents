import { useState } from "react";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import "./VolumeSlider.scss";

export default function VolumeSlider(props) {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleMinVolume = () => {
    setVolume(0);
  };

  const handleMaxVolume = () => {
    setVolume(100);
  };

  return (
    <div className="volumeSlider center-row">
      <BsFillVolumeMuteFill onClick={handleMinVolume} />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <BsFillVolumeUpFill onClick={handleMaxVolume} />
    </div>
  );
}
