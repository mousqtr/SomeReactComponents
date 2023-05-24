import React, { useState } from "react";
import "./CropImage.scss";

const CropImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 50, height: 50 });

  const handleDragStart = (event) => {
    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;

    const handleDragMove = (event) => {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      const maxX = 400 - size.width;
      const maxY = 300 - size.height;

      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: boundedX, y: boundedY });
    };

    const handleDragEnd = () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const handleResizeStart = (event, direction) => {
    event.stopPropagation();
    let startX = event.clientX;
    let startY = event.clientY;
    const maxWidth = 400 - event.clientX + size.width;
    const maxHeight = 300 - event.clientY + size.height;

    const handleResizeMove = (event) => {
      const offsetX = event.clientX - startX;
      const offsetY = event.clientY - startY;

      if (direction === "bottom-right") {
        setSize((prevSize) => ({
          width: Math.min(prevSize.width + offsetX, maxWidth),
          height: Math.min(prevSize.height + offsetY, maxHeight),
        }));
      }

      startX = event.clientX;
      startY = event.clientY;
    };

    const handleResizeEnd = () => {
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
    };

    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "300px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: size.width + "px",
          height: size.height + "px",
          background: "lightgrey",
          left: position.x + "px",
          top: position.y + "px",
        }}
        onMouseDown={handleDragStart}
      >
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "black",
            cursor: "nwse-resize",
            right: "0px",
            bottom: "0px",
          }}
          onMouseDown={(event) => handleResizeStart(event, "bottom-right")}
        />
      </div>
    </div>
  );
};

export default CropImage;
