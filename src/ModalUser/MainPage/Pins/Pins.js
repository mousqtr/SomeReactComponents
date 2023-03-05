import { useMemo } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import "./Pins.scss";

export default function Pins({ mode, elements, position, setElements }) {
  const pins = useMemo(() => {
    if (mode === "edit") {
      return elements;
    }
    return elements.filter((s) => s.name !== "");
  }, [mode, elements]);

  const handleDeleteElement = (id) => {
    const elements_ = [...elements];
    elements_[id] = { name: "", logo: <BiPlus /> };
    setElements(elements_);
  };

  return (
    <div
      className="pins center-row"
      style={{
        left: position === "left" ? "10px" : "inherit",
        right: position === "right" ? "10px" : "inherit",
      }}
    >
      {pins.map((s, index) => (
        <div key={index} className="icon center">
          {s.name !== "" ? (
            <>
              <div className="center fill">{s.logo}</div>
              {mode === "edit" ? (
                <AiFillMinusCircle
                  className="minus"
                  onClick={() => handleDeleteElement(index)}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <div className="center empty">{s.logo}</div>
          )}
        </div>
      ))}
    </div>
  );
}
