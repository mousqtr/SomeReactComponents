import { BsPencilFill } from "react-icons/bs";
import "./Image.scss";

export default function Image({ mode }) {
  const handleUpload = () => {
    console.log("upload image");
  };

  return (
    <div className="image">
      <img src="https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
