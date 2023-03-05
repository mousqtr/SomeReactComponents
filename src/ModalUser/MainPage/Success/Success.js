import { useMemo } from "react";
import { FaMedal } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import "./Success.scss";

const SUCCESS = [
  { name: "aa", logo: <FaMedal /> },
  { name: "bbs", logo: <FaMedal /> },
];

export default function Success({ mode }) {
  const success = useMemo(() => {
    if (mode === "edit") {
      return SUCCESS;
    }
    return SUCCESS.filter((s) => s.name !== "");
  }, [mode]);

  return (
    <div className="success center-row">
      {success.map((s, index) => (
        <div key={index} className="icon center">
          <div
            className={["center", s.name !== "" ? "fill" : "empty"].join(" ")}
          >
            {s.logo}
          </div>
        </div>
      ))}
    </div>
  );
}
