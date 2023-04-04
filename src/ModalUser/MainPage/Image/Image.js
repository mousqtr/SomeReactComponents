import { BsPencilFill } from "react-icons/bs";
import "./Image.scss";

export default function Image({ mode, url }) {
  const handleUpload = () => {
    console.log("upload image");
  };

  return (
    <div className="image">
      <img src={url} />
      {mode === "edit" ? (
        <div className="image-edit" onClick={handleUpload}>
          <BsPencilFill />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
