import { useContext, useState } from 'react';
import axios from 'axios';

import { GameContext } from '../contexts/GameContext';

// Vite handles .env differently from create-react-app
const BASE_URL = import.meta.env.VITE_BASE_URL; // Set the base URL

const GridItem = ({ image, index, alt, clickPosition }) => {
  const { foundItem, game, tryAgain } = useContext(GameContext);
  const { cx, cy } = clickPosition;

  const handleClick = async () => {
    const response = await axios.post(`${BASE_URL}/click`, {
      game,
      cx,
      cy,
      index,
    });
    if (response.data === true) {
      foundItem(index);
    } else {
      tryAgain();
    }
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
      <div style={gridItemStyle} onClick={handleClick}>
        <img src={image} alt={alt} style={{ width: '60px', height: '60px' }} />
      </div>
    </>
  );
};

export default GridItem;
