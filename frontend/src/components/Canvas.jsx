import React, { useState, useRef, useEffect, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

import Popup from './Popup';

// Background images
import room from '../assets/images/room.png';
import beach from '../assets/images/beach.jpg';
import dragons from '../assets/images/dragons.webp';

export default function Canvas({ game }) {
  const { getThreeRandomItems } = useContext(GameContext);

  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [clickPosition, setClickPosition] = useState({ x: null, y: null });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      switch (game) {
        case 1:
          setImageSrc(room);
          img.src = room;
          break;
        case 2:
          setImageSrc(beach);
          img.src = beach;
          break;
        case 3:
          setImageSrc(dragons);
          img.src = dragons;
          break;

        default:
          break;
      }
      img.onload = () => {
        setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
      };
    };

    loadImage();
    getThreeRandomItems(7);
  }, []);

  const handleMouseMove = (event) => {
    setShowPopup(false);

    // Get the relative location of canvas to screen
    const canvas = canvasRef.current;
    const { left, top } = canvas.getBoundingClientRect();

    // Mouse location on screen
    const mx = event.clientX;
    const my = event.clientY;
    setMousePosition({ mx, my });

    // Click position on canvas
    const cx = event.clientX - left;
    const cy = event.clientY - top;
    setClickPosition({ cx, cy });
  };

  const handleClick = () => {
    setShowPopup(true);
  };

  const canvasStyle = {
    width: `${imageSize.width}px`,
    height: `${imageSize.height}px`,
    border: '1px solid #ccc',
    backgroundImage: `url(${imageSrc})`, // Replace with your image path
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  return (
    <div>
      <div
        ref={canvasRef}
        style={canvasStyle}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      ></div>
      {showPopup && (
        <Popup mousePosition={mousePosition} clickPosition={clickPosition} />
      )}
    </div>
  );
}
