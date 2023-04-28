import { useState } from "react";
import { Form } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted, BsCheckLg } from "react-icons/bs";
import "./ColorBg.scss";

const bgStringToObject = (pString) => {
  const gradientType = pString.match(/^(linear|radial)-gradient/)[1];

  // extraire le degré (pour les dégradés linéaires seulement)
  const gradientDegreeMatch = pString.match(/\d+deg/);
  const gradientDegree = gradientDegreeMatch
    ? parseInt(gradientDegreeMatch[0])
    : null;

  // extraire les couleurs et les pourcentages
  const colorStops = pString
    .match(/[0-9a-fA-F]{6}\b\s+\d+%/g)
    .map((colorStop) => {
      const [color, stop] = colorStop.split(/\s+/);
      return {
        color,
        stop: parseInt(stop),
      };
    });

  return [gradientType, gradientDegree, colorStops];
};

const bgObjectToString = (pBackground) => {
  console.log(pBackground);
  const stopsString = pBackground.colors
    .map(({ color, stop }) => `${color} ${stop}%`)
    .join(", ");
  const degreeString = pBackground.degree ? `${pBackground.degree}deg, ` : "";
  return `background: ${pBackground.type}-gradient(${degreeString}${stopsString});`;
};

export default function ({ background, changeBackground }) {
  const [bg, setBg] = useState(bgStringToObject(background));

  const setPropety = (pProperty, pValue) => {
    setBg({ ...bg, [pProperty]: pValue });
  };

  const handleChangeColor = (e, index) => {
    const colors_ = [...colors];
    colors_[index].color = e.target.value;
    setPropety("colors", colors_);
  };

  const handleChangeStop = (e, index) => {
    const colors_ = [...colors];
    colors_[index].stop = e.target.value;
    setPropety("colors", colors_);
  };

  const handleRemove = (index) => {
    let colors_ = [...colors];
    colors_.splice(index, 1);
    if (colors_.length === 1) {
      colors_[0].stop = 100;
    }
    setPropety("colors", colors_);
  };

  const handleAdd = () => {
    setPropety("colors", [
      ...colors,
      {
        color: "#000000",
        stop: "100",
      },
    ]);
  };

  const handleChangeType = (e) => {
    setPropety("type", e.target.value);
  };

  const handleChangeDegree = (e) => {
    setPropety("degree", e.target.value);
  };

  const handleCancel = (e) => {
    console.log("cancel");
  };

  const handleConfirm = (e) => {
    console.log("confirm");
  };

  return (
    <div id="colorBg">
      <h5>Arrière-plan personnalisé</h5>
      <div className="preview">
        <p>Visualisation</p>
        <div
          className="preview-block"
          style={{ background: bgObjectToString(bg) }}
        ></div>
      </div>

      <div className="choose-type">
        <p>Type de gradient</p>
        <div className="chosen-part">
          <Form.Check
            type="radio"
            label="Linear"
            name="typeGradient"
            value="linear"
            checked={bg.type === "linear"}
            onChange={handleChangeType}
          />
          <Form.Check
            type="radio"
            label="Radial"
            name="typeGradient"
            value="radial"
            checked={bg.type === "radial"}
            onChange={handleChangeType}
          />
        </div>
      </div>

      <div className="choose-colors">
        <p>Choix des couleurs</p>
        <div className="chosen-part">
          {bg.colors.map((elt, index) => (
            <div key={index} className="choose-color bothColor center-row">
              <input
                type="color"
                className="color"
                value={elt.color}
                onChange={(e) => handleChangeColor(e, index)}
              />
              <input
                type="number"
                className="stop"
                disabled={colors.length === 1 && index === 0}
                min="0"
                max="100"
                value={elt.stop}
                onChange={(e) => handleChangeStop(e, index)}
              />

              <div className="remove center">
                <BiTrash
                  onClick={() => handleRemove(index)}
                  className={index === 0 ? "disabled" : ""}
                />
              </div>
            </div>
          ))}

          {bg.colors.length === 1 ? (
            <div
              className="choose-color bothColor center-row add"
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

      <div className="bg-buttons">
        <button className="btn btn-green" onClick={handleConfirm}>
          Confirmer
        </button>
        <button className="btn btn-red mr-1" onClick={handleCancel}>
          Annuler
        </button>
      </div>
    </div>
  );
}
