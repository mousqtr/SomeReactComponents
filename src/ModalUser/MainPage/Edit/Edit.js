import { BsPencilFill, BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./Edit.scss";

export default function Edit({ mode, setMode }) {
  const handleEdit = () => {
    setMode("edit");
  };

  const handleCancel = () => {
    setMode("show");
  };

  const handleSave = () => {
    console.log("save");
  };

  return (
    <div className="edit center">
      {mode === "show" ? (
        <div className="button button-edit center" onClick={handleEdit}>
          <BsPencilFill />
        </div>
      ) : (
        <></>
      )}

      {mode === "edit" ? (
        <>
          <div className="button button-cancel center" onClick={handleCancel}>
            <ImCross />
          </div>
          <div className="button button-save center" onClick={handleSave}>
            <BsCheckLg />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
