import { BsPencilFill } from "react-icons/bs";
import "./Image.scss";

export default function Image({ mode }) {
  const handleUpload = () => {
    console.log("upload image");
  };

  return (
    <div className="image">
      <img src="https://solunew.com/img/users/profile.png" />
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
