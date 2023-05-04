import { useState, useMemo, useEffect } from "react";
import { Form } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted, BsCheckLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { bgStringToObject, bgObjectToString, degreeToInt } from "./utils.js";
import "./ColorBg.scss";

export default function ({ addBackground, hide, isHide }) {
  const [bg, setBg] = useState(
    bgStringToObject("linear-gradient(120deg, #2747A9 37%, #abc149 100%)")
  );
  const [degree, setDegree] = useState(degreeToInt(bg.degree));

  const setPropety = (pProperty, pValue) => {
    setBg({ ...bg, [pProperty]: pValue });
  };

  const handleChangeColor = (e, index) => {
    const colors_ = [...bg.colors];
    colors_[index].color = e.target.value;
    setPropety("colors", colors_);
  };

  const handleChangeStop = (e, index) => {
    const colors_ = [...bg.colors];
    colors_[index].stop = e.target.value;
    setPropety("colors", colors_);
  };

  const handleRemove = (index) => {
    let colors_ = [...bg.colors];
    colors_.splice(index, 1);
    if (colors_.length === 1) {
      colors_[0].stop = 100;
    }
    setPropety("colors", colors_);
  };

  const handleAdd = () => {
    setPropety("colors", [
      ...bg.colors,
      {
        color: "#000000",
        stop: "100",
      },
    ]);
  };

  const handleChangeType = (e) => {
    setBg({
      ...bg,
      type: e.target.value,
      degree: e.target.value === "radial" ? "circle" : `${degree}deg`,
    });
  };

  const handleChangeDegree = (e) => {
    setDegree(e.target.value);
    if (bg.type === "linear") {
      setPropety("degree", `${e.target.value}deg`);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    hide();
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    addBackground(bgObjectToString(bg));
  };

  const previewBg = useMemo(() => {
    if (bg.colors.length > 1) {
      return bgObjectToString(bg);
    } else {
      return `${bg.colors[0].color}`;
    }
  }, [bg]);

  return (
    <div id="colorBg">
      <h5>
        Créer son arrière-plan
        <button onClick={handleCancel} className="btn btn-red">
          <MdClose />
        </button>
      </h5>
      <div className="preview">
        <p>Visualisation</p>
        <div className="chosen-part">
          <div
            className="preview-block"
            style={{ background: previewBg }}
          ></div>
        </div>
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

      {bg.type === "linear" ? (
        <div className="choose-degree">
          <p>Angle du gradient</p>
          <div className="chosen-part">
            <input
              type="number"
              className="degree"
              min="0"
              max="360"
              value={degree}
              onChange={handleChangeDegree}
            />
            {" degrés"}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="choose-colors">
        <p>Choix des couleurs</p>
        <div className="chosen-part">
          {bg.colors.map((elt, index) => (
            <div key={index} className="choose-color">
              <input
                type="color"
                className="color"
                value={elt.color}
                onChange={(e) => handleChangeColor(e, index)}
              />
              <input
                type="number"
                className="stop"
                disabled={bg.colors.length === 1 && index === 0}
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
            <div className="choose-color add" onClick={handleAdd}>
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
          Ajouter
        </button>
      </div>
    </div>
  );
}
