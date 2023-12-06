import React, { useState, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

import GridItem from './GridItem';

import { lightImagesArray, beachImagesArray } from '../assets/images';

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
        image={beachImagesArray[item.index]}
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
