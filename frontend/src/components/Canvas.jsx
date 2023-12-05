import React, { useState, useRef } from 'react';
import Popup from './Popup';

export default function Canvas() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseMove = (event) => {
    setShowPopup(false);

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * container.offsetWidth;
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * container.offsetHeight;

    setMousePosition({ x, y });
  };

  const handleResize = () => {
    const container = containerRef.current;
    setContainerSize({
      width: container.offsetWidth,
      height: container.offsetHeight,
    });
  };

  const handleClick = () => {
    setShowPopup(true);
  };

  const canvasStyle = {
    height: '95vh',
    border: '1px solid #ccc',
    backgroundImage: 'url("../../public/room.png")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  return (
    <>
      <div
      ref={containerRef}
        style={canvasStyle}
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
