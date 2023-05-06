import VolumeSlider from "./VolumeSlider/VolumeSlider";
import Actions from "./Actions/Actions";
import { FaUserFriends, FaStar } from "react-icons/fa";

import "./Content.scss";

export default function Content({ username, setPage }) {
  const handleShowFriends = () => {
    setPage("friends");
  };

  const handleShowSuccess = () => {
    setPage("success");
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
        <strong>AMIS</strong>
        <div className="center btn-purple" onClick={handleShowFriends}>
          <FaUserFriends />
        </div>
      </div>
      <div className="content-section content-badges">
        <strong>SUCCES</strong>
        <div className="center btn-purple" onClick={handleShowSuccess}>
          <FaStar />
        </div>
      </div>
    </div>
  );
}
