import { createContext, useState } from 'react';

import {
  lightImagesArray,
  beachImagesArray,
  dragonImagesArray,
} from '../assets/images';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);
  const [itemsFound, setItemsFound] = useState(0);
  const [items, setItems] = useState([]);
  const [time, setTime] = useState(0);
  const [game, setGame] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const [showGreenAlert, setShowGreenAlert] = useState(false);
  const [showRedAlert, setShowRedAlert] = useState(false);

  const startGame = (game) => {
    setGame(game);
    switch (game) {
      case 1:
        setImageArray(lightImagesArray);
        break;
      case 2:
        setImageArray(beachImagesArray);

        break;
      case 3:
        setImageArray(dragonImagesArray);

        break;

      default:
        break;
    }
    setGameStart(true);
    setItemsFound(0);
  };

  const quitGame = () => {
    setGameStart(false);
    setItemsFound(0);
  };

  function getThreeRandomNumbers(length) {
    if (length <= 3) {
      // If length is less than or equal to 3, return the entire range
      return Array.from({ length }, (_, index) => index);
    }

    const result = [];
    const selectedIndices = new Set();

    while (selectedIndices.size < 3) {
      const randomNumber = Math.floor(Math.random() * length);
      if (!selectedIndices.has(randomNumber)) {
        selectedIndices.add(randomNumber);
        result.push(randomNumber);
      }
    }

    return result;
  }

  const getThreeRandomItems = (length) => {
    if (!length || length < 3) {
      console.log('length needs to be greater than 3');
    }
    const randomNumbers = getThreeRandomNumbers(length);

    const items = randomNumbers.map((index) => ({
      index,
      found: false,
    }));
    setItems(items);
  };

  const foundItem = async (index) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.index === index ? { ...item, found: true } : item
      )
    );
    incrementItemsFound();
    setShowGreenAlert(true);
    await delay(2000);
    setShowGreenAlert(false);
  };

  const tryAgain = async (index) => {

    setShowRedAlert(true);
    await delay(2000);
    setShowRedAlert(false);
  };



  // Function to increment itemsFound by 1
  const incrementItemsFound = () => {
    setItemsFound((prevItemsFound) => prevItemsFound + 1);
  };

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const gameContextValue = {
    gameStart,
    startGame,
    quitGame,
    getThreeRandomItems,
    items,
    foundItem,
    tryAgain,
    itemsFound,
    time,
    setTime,
    game,
    imageArray,
    showGreenAlert,
    showRedAlert,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
