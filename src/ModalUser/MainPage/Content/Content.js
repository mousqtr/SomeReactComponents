import VolumeSlider from "./VolumeSlider/VolumeSlider";
import Actions from "./Actions/Actions";

import "./Content.scss";

export default function Content({ username, bio, setPage }) {
  const formatBio = (pBio) => {
    const maxLength = 108;
    if (pBio.length > maxLength) {
      pBio = pBio.slice(0, maxLength);
    }
    return pBio + "...";
  };

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
      <div className="content-date">
        <strong>DATE D'INSCRIPTION</strong>
        03-08-2023
      </div>
      <div className="content-description">
        <strong>DESCRIPTION</strong>
        <div className="bio">
          {formatBio(bio)}
          <div className="next" onClick={handleShowMore}>
            Voir plus >>
          </div>
        </div>
      </div>
    </div>
  );
}
