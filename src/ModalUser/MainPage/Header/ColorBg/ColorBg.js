import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import "./ColorBg.scss";

export default function ({ colors, setColors, colorsToString }) {
  const [localColors, setLocalColors] = useState(colors);

  const handleSetLocalColor = (e) => {
    const localColors_ = [...localColors];
    localColors_[0].color = e.target.value;
    setLocalColors(localColors_);
  };

  const handleSetLocalStop = (e, index) => {
    const localColors_ = [...localColors];
    localColors_[index].stop = e.target.value;
    setLocalColors(localColors_);
  };

  return (
    <div id="colorBg">
      <div
        className="preview"
        style={{ background: colorsToString(localColors) }}
      ></div>

      {localColors.map((elt, index) => (
        <div className="sub-block bothColor center-row">
          <input
            type="color"
            className="color"
            value={elt.color}
            onChange={(e) => handleSetLocalColor(e, index)}
          />
          <input
            type="number"
            className="stop"
            min="0"
            max="100"
            value={elt.stop}
            onChange={(e) => handleSetLocalStop(e, index)}
          />
          <div className="remove center">
            <BiTrash />
          </div>
        </div>
      ))}
      <div className="bottom-block text-right">
        <button className="btn-success">Valider</button>
      </div>
    </div>
  );
}
