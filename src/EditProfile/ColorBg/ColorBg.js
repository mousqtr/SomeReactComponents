import { Form } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted, BsCheckLg } from "react-icons/bs";
import "./ColorBg.scss";

export default function ({ background, changeBackground, colorsToString }) {
  const type = background.type;
  const colors = background.colors;

  const setType = (pType) => {
    changeBackground({ ...background, type: pType });
  };

  const setColors = (pColors) => {
    changeBackground({ ...background, colors: pColors });
  };

  const handleChangeColor = (e, index) => {
    const colors_ = [...colors];
    colors_[index].color = e.target.value;
    setColors(colors_);
  };

  const handleChangeStop = (e, index) => {
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

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  return (
    <div id="colorBg">
      <div className="preview">
        <p>Visualisation</p>
        <div
          className="preview-block"
          style={{ background: colorsToString(colors) }}
        ></div>
      </div>

      <div className="choose-type">
        <p>Type de gradient</p>
        <Form.Check
          type="radio"
          label="Linear"
          name="typeGradient"
          value="linear"
          checked={type === "linear"}
          onChange={handleChangeType}
        />
        <Form.Check
          type="radio"
          label="Radial"
          name="typeGradient"
          value="radial"
          checked={type === "radial"}
          onChange={handleChangeType}
        />
      </div>

      <div className="choose-colors">
        <p>Choix des couleurs</p>
        {colors.map((elt, index) => (
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

        {colors.length === 1 ? (
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
  );
}
