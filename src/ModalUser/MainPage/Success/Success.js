import { FaMedal } from "react-icons/fa";
import "./Success.scss";

export default function Success() {
  return (
    <div className="success center-row">
      <div className="icon center">
        <FaMedal />
      </div>
      <div className="icon center">
        <FaMedal />
      </div>
    </div>
  );
}
