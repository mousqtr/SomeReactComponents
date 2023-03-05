import { useState } from "react";
import { FaMedal } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import Pins from "../Pins/Pins";

export default function Success({ mode }) {
  const [success, setSuccess] = useState([
    { name: "aa", logo: <FaMedal /> },
    { name: "bb", logo: <FaMedal /> },
    { name: "", logo: <BiPlus /> },
  ]);

  return (
    <Pins
      mode={mode}
      position="right"
      elements={success}
      setElements={setSuccess}
    />
  );
}
