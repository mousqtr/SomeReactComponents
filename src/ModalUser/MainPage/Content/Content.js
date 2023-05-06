import VolumeSlider from "./VolumeSlider/VolumeSlider";
import Actions from "./Actions/Actions";
import { FaArrowRight } from "react-icons/fa";

import "./Content.scss";

export default function Content({ username, setPage }) {
  const handleShowMore = () => {
    setPage("description");
  };

  return (
    <div className="content">
      <div className="content-username">{username}</div>
      <div className="content-section content-description">
        La vie est un long fleuve agité La vie est un long fleuve agité, si tu
        cours tu vas tt tt
      </div>
      <div className="content-section content-actions">
        <strong>ACTIONS</strong>
        <Actions />
      </div>

      <div className="content-section content-volume">
        <strong>VOLUME</strong>
        <VolumeSlider />
      </div>
      <div className="content-section content-date">
        <strong>DATE D'INSCRIPTION</strong>03-08-2023
      </div>
      <div className="content-section content-friends">
        <strong>AMIS</strong>150
      </div>
      <div className="content-section content-badges">
        <strong>BADGES</strong>178
      </div>
    </div>
  );
}
