import { useState } from "react";
import Pins from "../Pins/Pins";

export default function Success({ mode }) {
  const [success, setSuccess] = useState(["success0", "success0", "none"]);

  return (
    <Pins
      mode={mode}
      position="right"
      elements={success}
      setElements={setSuccess}
    />
  );
}
