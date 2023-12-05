import React, { useState } from 'react';
import axios from 'axios'


// Vite handles .env differently from create-react-app
const BASE_URL = import.meta.env.VITE_BASE_URL; // Set the base URL

const location1 = { x: 1000, y: 160 };
const location2 = { x: 725, y: 155 };
const location3 = { x: 310, y: 240 };
const location4 = { x: 600, y: 360 };
const location5 = { x: 1100, y: 500 };
const location6 = { x: 550, y: 420 };
const location7 = { x: 720, y: 370 };

const locations = [
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
  location7,
];

const GridItem = ({ image, index, alt, mousePosition }) => {
  const mx = mousePosition.x;
  const my = mousePosition.y;
  console.log(
    '🚀 ~ file: GridItem.jsx:15 ~ GridItem ~ mousePosition:',
    mousePosition
  );
  console.log('🚀 ~ file: GridItem.jsx:15 ~ GridItem ~ my:', my);
  console.log('🚀 ~ file: GridItem.jsx:15 ~ GridItem ~ mx:', mx);

  const [show, setShow] = useState(true);

  const handleClick = async () => {
    console.log(index);
    const { x, y } = locations[index];
    console.log('🚀 ~ file: GridItem.jsx:19 ~ handleClick ~ yy:', y);
    console.log('🚀 ~ file: GridItem.jsx:19 ~ handleClick ~ xx:', x);


    const response = await axios.post(`${BASE_URL}/click`, {mx, my, index})
    if (response.data === true) {
      alert('You found it!')
    } else {
      alert('Try again!')
    }
    console.log("🚀 ~ file: GridItem.jsx:45 ~ handleClick ~ response:", response)
  };

  const gridItemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #ccc',
    padding: '5px',
    textAlign: 'center',
    cursor: 'pointer',
  };
  return (
    <>
      {show && (
        <div style={gridItemStyle} onClick={handleClick}>
          <img
            src={image}
            alt={alt}
            style={{ width: '60px', height: '60px' }}
          />
        </div>
      )}
    </>
  );
};

export default GridItem;
