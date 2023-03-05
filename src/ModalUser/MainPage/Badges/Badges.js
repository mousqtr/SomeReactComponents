import { useState } from "react";
import { GiPoliceBadge } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import Pins from "../Pins/Pins";

export default function Badges({ mode }) {
  const [badges, setBadges] = useState([
    { name: "a", logo: <GiPoliceBadge /> },
    { name: "a", logo: <GiPoliceBadge /> },
    { name: "tt", logo: <GiPoliceBadge /> },
  ]);

  return (
    <Pins
      mode={mode}
      position="left"
      elements={badges}
      setElements={setBadges}
    />
  );
}
