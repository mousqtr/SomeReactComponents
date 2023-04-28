import { useEffect, useMemo, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted, BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./ColorBg.scss";

export default function ({ colors, setColors, colorsToString, close }) {
  const handleSetColor = (e, index) => {
    const colors_ = [...colors];
    colors_[index].color = e.target.value;
    setColors(colors_);
  };

  const handleSetStop = (e, index) => {
    const colors_ = [...colors];
    colors_[index].stop = e.target.value;
    setColors(colors_);
  };

  const handleRemove = (index) => {
    let colors_ = [...colors];
    colors_.splice(index, 1);
    if (colors_.length === 1) {
      colors_[0].stop = 100;
    }
    setColors(colors_);
  };

  const handleAdd = () => {
    setColors([
      ...colors,
      {
        color: "#000000",
        stop: "100",
      },
    ]);
  };

  const handleClose = () => {
    close();
  };

  return (
    <div id="colorBg">
      <div
        className="preview"
        style={{ background: colorsToString(colors) }}
      ></div>

      <div className="sub-blocks">
        {colors.map((elt, index) => (
          <div key={index} className="sub-block bothColor center-row">
            <input
              type="color"
              className="color"
              value={elt.color}
              onChange={(e) => handleSetColor(e, index)}
            />
            <input
              type="number"
              className="stop"
              disabled={colors.length === 1 && index === 0}
              min="0"
              max="100"
              value={elt.stop}
              onChange={(e) => handleSetStop(e, index)}
            />

            <div className="remove center">
              <BiTrash
                onClick={() => handleRemove(index)}
                className={index === 0 ? "disabled" : ""}
              />
            </div>
          </div>
        ))}

        {colors.length === 1 ? (
          <div
            className="sub-block bothColor center-row add"
            onClick={handleAdd}
          >
            <BsPlusCircleDotted />
            <span>Ajouter couleur</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
