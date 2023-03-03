import "./ModalUser.scss";
import { FaMedal } from "react-icons/fa";
import { GiPoliceBadge } from "react-icons/gi";
import VolumeSlider from "./VolumeSlider";

export default function ModalUser() {
  const bio =
    "It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible";

  const formatBio = (pBio) => {
    const maxLength = 110;
    if (pBio.length > maxLength) {
      pBio = pBio.slice(0, maxLength);
    }
    return pBio + "...";
  };

  return (
    <div id="modalUser">
      <div className="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,240C1120,235,1280,149,1360,106.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="sub-image"></div>
      <div className="body">
        <div className="badges center-row">
          <div className="icon center">
            <GiPoliceBadge />
          </div>
          <div className="icon center">
            <GiPoliceBadge />
          </div>
        </div>
        <div className="success center-row">
          <div className="icon center">
            <FaMedal />
          </div>
          <div className="icon center">
            <FaMedal />
          </div>
        </div>
        <div className="content">
          <div className="username">MousQTR</div>
          <div className="actions center-row">
            <div className="action center">
              <FaMedal />
            </div>
            <div className="action center">
              <FaMedal />
            </div>
            <div className="action center">
              <FaMedal />
            </div>
          </div>
          <div className="volume center">
            <VolumeSlider />
          </div>
          <div className="date">
            <strong>DATE D'INSCRIPTION</strong>
            03/08/2023
          </div>
          <div className="description">
            <strong>DESCRIPTION</strong>
            <div className="bio">
              {formatBio(bio)}
              <div className="next">Voir plus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
