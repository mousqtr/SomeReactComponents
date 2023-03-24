import { useEffect, useMemo, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";
import "./ColorBg.scss";

export default function ({ colors, setColors, colorsToString }) {
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
    setLocalColors(localColors_);
  };

  const handleAdd = () => {
    const localColors_ = [
      ...localColors,
      {
        color: "#5757a9",
        stop: "100",
      },
    ];
    setLocalColors(localColors_);
  };

  useEffect(() => {
    console.log(localColors);
    setDisplayedColors(colorsToString(localColors));
  }, [localColors]);

  return (
    <div id="colorBg">
      <div className="preview" style={{ background: displayedColors }}></div>

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
        <div className="sub-block bothColor center">
          <BsPlusCircleDotted onClick={() => handleAdd()} className="add" />
        </div>
      ) : (
        <></>
      )}

      <div className="bottom-block text-right">
        <button className="btn-success">Valider</button>
      </div>
    </div>
  );
}
