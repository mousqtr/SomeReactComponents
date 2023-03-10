import { FaArrowLeft } from "react-icons/fa";
import "./DescriptionPage.scss";

export default function DescriptionPage({ bio, setPage }) {
  const handlePrevious = () => {
    setPage("main");
  };

  return (
    <div className="descriptionPage">
      <div className="previous center-row" onClick={handlePrevious}>
        <FaArrowLeft /> Précédent
      </div>
      <div className="content-section">
        <strong>DESCRIPTION</strong>
        <div className="bio">{bio}</div>
      </div>
    </div>
  );
}
