import React from 'react';

import GridItem from './GridItem';

import image1 from '../../public/light1.png';
import image2 from '../../public/light2.png';
import image3 from '../../public/light3.png';
import image4 from '../../public/light4.png';
import image5 from '../../public/light5.png';
import image6 from '../../public/light6.png';
import image7 from '../../public/light7.png';
const imagesArray = [image1, image2, image3, image4, image5, image6, image7];

const getRandomImageIndexes = (count) => {
  const shuffled = [0, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const randomImageIndexes = getRandomImageIndexes(3);
console.log(
  '🚀 ~ file: Popup.jsx:20 ~ randomImageIndexes:',
  randomImageIndexes
);

export default function Popup({ mousePosition, clickPosition }) {
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
  const gridItems = randomImageIndexes.map((index) => (
    <GridItem
      key={index}
      image={imagesArray[index]}
      index={index}
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
