import { useMemo } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { getIcon } from "../../icons";
import "./Pins.scss";

export default function Pins({ mode, elements, position, setElements }) {
  const pins = useMemo(() => {
    if (mode === "edit") {
      return elements;
    }
    return elements.filter((name) => name !== "");
  }, [mode, elements]);

  const handleDeleteElement = (id) => {
    const elements_ = [...elements];
    elements_[id] = "none";
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
      {pins.map((name, index) => (
        <>
          {name !== "none" ? (
            <div key={index} className="icon center">
              <div className="center fill">{getIcon(name)}</div>
              {mode === "edit" ? (
                <AiFillMinusCircle
                  className="minus"
                  onClick={() => handleDeleteElement(index)}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <>
              {mode === "edit" ? (
                <div key={index} className="icon center">
                  <div className="center empty">{getIcon(name)}</div>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      ))}
    </div>
  );
}
