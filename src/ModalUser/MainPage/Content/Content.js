import VolumeSlider from "./VolumeSlider/VolumeSlider";
import Actions from "./Actions/Actions";

import "./Content.scss";

export default function Content({ username, setPage }) {
  const handleShowMore = () => {
    setPage("description");
  };

  return (
    <div className="content">
      <div className="content-username">{username}</div>
      <div className="content-actions">
        <Actions />
      </div>
      <div className="content-volume center">
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
      <div className="content-section content-description">
        <strong>DESCRIPTION</strong>
        <div className="next" onClick={handleShowMore}>
          (Ouvrir ici)
        </div>
      </div>
    </div>
  );
}
