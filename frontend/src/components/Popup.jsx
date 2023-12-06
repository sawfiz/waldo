import React, { useState, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

import GridItem from './GridItem';

import image1 from '../assets/images/light1.png';
import image2 from '../assets/images/light2.png';
import image3 from '../assets/images/light3.png';
import image4 from '../assets/images/light4.png';
import image5 from '../assets/images/light5.png';
import image6 from '../assets/images/light6.png';
import image7 from '../assets/images/light7.png';
const imagesArray = [image1, image2, image3, image4, image5, image6, image7];

// const getRandomImageIndexes = (count) => {
//   const shuffled = [0, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// };

// const randomImageIndexes = getRandomImageIndexes(3);

export default function Popup({ mousePosition, clickPosition }) {
  const { items } = useContext(GameContext);

  const { mx, my } = mousePosition;

  const componentStyle = {
    position: 'fixed',
    top: my - 20,
    left: mx - 20,
    backgroundColor: 'rgba(0,0,0,0.1)', // Transparent lightblue background

    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  };

  const circleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'transparent', // Transparent lightblue background
    border: '2px red solid',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '5px',
    marginLeft: '40px', // Adjust margin for the grid
  };

  // Create an array of GridItem components mapped from randomImages
  const gridItems = items
    .filter((item) => !item.found)
    .map((item, index) => (
      <GridItem
        key={index}
        image={imagesArray[item.index]}
        index={item.index}
        alt={`Image ${index + 1}`}
        clickPosition={clickPosition}
      />
    ));

  return (
    <div style={componentStyle}>
      <div style={circleStyle}></div>
      <div style={gridStyle}>{gridItems}</div>
    </div>
  );
}
