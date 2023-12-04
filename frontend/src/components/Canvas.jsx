import React, { useState } from 'react';
import Popup from './Popup';

export default function Canvas() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseMove = (event) => {
    setShowPopup(false);
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div
        style={{ height: '95vh', border: '1px solid #ccc' }}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <p>Move your mouse over this div to see the position:</p>
        <p>
          X: {mousePosition.x}, Y: {mousePosition.y}
        </p>
      </div>
      {showPopup && <Popup mousePosition={mousePosition} />}
    </>
  );
}
