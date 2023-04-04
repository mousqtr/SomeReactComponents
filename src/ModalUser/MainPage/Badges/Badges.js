import { useState } from "react";
import { GiPoliceBadge } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import Pins from "../Pins/Pins";

export default function Badges({ mode }) {
  const [badges, setBadges] = useState(["badge0", "badge0", "badge0"]);

  return (
    <Pins
      mode={mode}
      position="left"
      elements={badges}
      setElements={setBadges}
    />
  );
}
