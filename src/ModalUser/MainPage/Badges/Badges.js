import { GiPoliceBadge } from "react-icons/gi";
import { useMemo } from "react";
import { BiPlus } from "react-icons/bi";
import "./Badges.scss";

const BADGES = [
  { name: "", logo: <BiPlus /> },
  { name: "test", logo: <GiPoliceBadge /> },
];

export default function Badges({ mode }) {
  const badges = useMemo(() => {
    if (mode === "edit") {
      return BADGES;
    }
    return BADGES.filter((badge) => badge.name !== "");
  }, [mode]);

  return (
    <div className="badges center-row">
      {badges.map((badge, index) => (
        <div key={index} className="icon center">
          <div
            className={["center", badge.name !== "" ? "fill" : "empty"].join(
              " "
            )}
          >
            {badge.logo}
          </div>
        </div>
      ))}
    </div>
  );
}
