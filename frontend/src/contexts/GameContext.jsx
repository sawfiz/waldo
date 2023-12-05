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

  const startGame = () => {
    setGameStart(true);
    setItemsFound(0);
    setGameOver(false);
  };

  const quitGame = () => {
    setGameStart(false);
    setItemsFound(0);

  };

  const gameContextValue = { gameStart, startGame, quitGame };

  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
