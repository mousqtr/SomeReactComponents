import { useState } from "react";
import { GiPoliceBadge } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import Pins from "../Pins/Pins";

export default function Badges({ badges }) {
  return <Pins position="right" elements={badges} type="badges" />;
}
