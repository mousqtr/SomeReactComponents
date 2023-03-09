import "./DescriptionPage.scss";

export default function DescriptionPage({ bio, setPage }) {
  const handlePrevious = () => {
    setPage("main");
  };

  return (
    <div className="descriptionPage">
      <div className="previous" onClick={handlePrevious}>
        {"<"} Précédent
      </div>
      <div className="content-section">
        <strong>DESCRIPTION</strong>
        <div className="bio">{bio}</div>
      </div>
    </div>
  );
}
