import { SUCCESS_ICONS } from "./../../../data/data";
import "./Pins.scss";

export default function Pins({ elements, position }) {
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
          <div className="center fill">{SUCCESS_ICONS[name]}</div>
        </div>
      ))}
    </div>
  );
}
