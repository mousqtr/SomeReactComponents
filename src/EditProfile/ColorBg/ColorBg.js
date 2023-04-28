import { useEffect, useMemo, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted, BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./ColorBg.scss";

export default function ({ colors, setColors, colorsToString, close }) {
  const [localColors, setLocalColors] = useState(colors);
  const [displayedColors, setDisplayedColors] = useState(
    colorsToString(localColors)
  );

  const handleSetLocalColor = (e, index) => {
    const localColors_ = [...localColors];
    localColors_[index].color = e.target.value;
    setLocalColors(localColors_);
  };

  const handleSetLocalStop = (e, index) => {
    const localColors_ = [...localColors];
    localColors_[index].stop = e.target.value;
    setLocalColors(localColors_);
  };

  const handleRemove = (index) => {
    let localColors_ = [...localColors];
    localColors_.splice(index, 1);
    if (localColors_.length === 1) {
      localColors_[0].stop = 100;
    }
    setLocalColors(localColors_);
  };

  const handleAdd = () => {
    const localColors_ = [
      ...localColors,
      {
        color: "#000000",
        stop: "100",
      },
    ];
    setLocalColors(localColors_);
  };

  const handleSave = () => {
    setColors(localColors);
  };

  const handleClose = () => {
    close();
  };

  return (
    <div id="colorBg">
      <div
        className="preview"
        style={{ background: colorsToString(localColors) }}
      ></div>

      {localColors.map((elt, index) => (
        <div key={index} className="sub-block bothColor center-row">
          <input
            type="color"
            className="color"
            value={elt.color}
            onChange={(e) => handleSetLocalColor(e, index)}
          />
          <input
            type="number"
            className="stop"
            disabled={localColors.length === 1 && index === 0}
            min="0"
            max="100"
            value={elt.stop}
            onChange={(e) => handleSetLocalStop(e, index)}
          />

          <div className="remove center">
            <BiTrash
              onClick={() => handleRemove(index)}
              className={index === 0 ? "disabled" : ""}
            />
          </div>
        </div>
      ))}

      {localColors.length === 1 ? (
        <div className="sub-block bothColor center-row add" onClick={handleAdd}>
          <BsPlusCircleDotted />
          <span>Ajouter couleur</span>
        </div>
      ) : (
        <></>
      )}

      <div className="bottom-block center-row">
        <div className="button button-cancel center" onClick={handleClose}>
          <ImCross />
        </div>
        <div className="button button-save center" onClick={handleSave}>
          <BsCheckLg />
        </div>
      </div>
    </div>
  );
}
