import { useState } from "react";
import ColorBg from "./ColorBg/ColorBg";
import { BiPaint } from "react-icons/bi";
import "./Header.scss";

export default function Header({ mode, bgColors }) {
  const [colors, setColors] = useState(bgColors);
  const [isColorBg, setColorBg] = useState(false);

  const colorsToString = (pColors) => {
    console.log(pColors);
    if (pColors.length > 1) {
      let s = "linear-gradient(90deg, ";
      pColors.forEach((elt, index) => {
        const res = elt.color + " " + elt.stop + "%";
        s +=
          index < pColors.length - 1 && pColors.length > 1 ? res + ", " : res;
      });
      s += ")";
      console.log(s);
      return s;
    } else {
      return pColors[0].color;
    }
  };

  return (
    <div className="header" style={{ background: colorsToString(colors) }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,240C1120,235,1280,149,1360,106.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {mode === "edit" ? (
        <div
          className="edit-header center"
          onClick={() => setColorBg(!isColorBg)}
        >
          <BiPaint type="color" />
        </div>
      ) : (
        <></>
      )}

      {isColorBg ? (
        <ColorBg
          colors={colors}
          setColors={setColors}
          colorsToString={colorsToString}
          close={() => setColorBg(false)}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
