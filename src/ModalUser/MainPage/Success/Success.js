import { useState } from "react";
import Pins from "../Pins/Pins";

export default function Success({ success }) {
  return <Pins position="left" elements={success} type="success" />;
}
