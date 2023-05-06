import { MdPersonAddAlt1, MdMessage } from "react-icons/md";
import { BsShieldFillExclamation } from "react-icons/bs";
import "./Actions.scss";

export default function Actions() {
  return (
    <div className="actions center-row">
      <div className="action btn-purple center">
        <MdPersonAddAlt1 />
      </div>
      <div className="action btn-purple center">
        <MdMessage />
      </div>
      <div className="action btn-purple center">
        <BsShieldFillExclamation />
      </div>
    </div>
  );
}
