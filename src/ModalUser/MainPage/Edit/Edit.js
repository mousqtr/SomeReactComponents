import { BsPencilFill, BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./Edit.scss";

export default function Edit() {
  return (
    <div className="edit center">
      <div className="button button-edit center">
        <BsPencilFill />
      </div>
      {/* <div className="button button-cancel center">
        <ImCross />
      </div>
      <div className="button button-save center">
        <BsCheckLg />
      </div> */}
    </div>
  );
}
