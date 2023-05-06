import { SUCCESS_ICONS } from "./../../../data/data";
import { BADGES_ICONS } from "./../../../data/data";
import "./Pins.scss";

export default function Pins({ elements, position, type }) {
  return (
    <div
      className="pins center-row"
      style={{
        left: position === "left" ? "10px" : "inherit",
        right: position === "right" ? "10px" : "inherit",
      }}
    >
      {elements.map((name, index) => (
        <div key={index} className="icon center">
          <div className="center fill">
            {type === "success" ? SUCCESS_ICONS[name] : BADGES_ICONS[name]}
          </div>
        </div>
      ))}
    </div>
  );
}
