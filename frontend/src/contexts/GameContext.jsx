import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);
  console.log(
    '🚀 ~ file: GameContext.jsx:7 ~ GameProvider ~ gameStart:',
    gameStart
  );
  const [itemsFound, setItemsFound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [items, setItems] = useState([])

  const startGame = () => {
    setGameStart(true);
    setItemsFound(0);
    setGameOver(false);
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
      console.log("length needs to be greater than 3");
    }
    const randomNumbers = getThreeRandomNumbers(length);
    console.log("🚀 ~ file: GameContext.jsx:47 ~ getThreeRandomItems ~ randomNumbers:", randomNumbers)

    const items = randomNumbers.map((index) => ({
      index,
      found: false
    }));
    console.log("🚀 ~ file: GameContext.jsx:52 ~ items ~ items:", items)
    setItems(items);
  };

  const foundItem = (index) => {
    setItems(prevItems =>
      prevItems.map((item) =>
        item.index === index ? { ...item, found: true } : item
      )
    );
  };

  const gameContextValue = { gameStart, startGame, quitGame, getThreeRandomItems, items, foundItem };

  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
