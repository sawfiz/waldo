// Libraries
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { GameContext } from '../contexts/GameContext';

// Components

// Styling
import { Button } from 'react-bootstrap';

export default function Home() {
  const { startGame } = useContext(GameContext);

  const handleSubmit = () => {
    startGame();
  };

  return (
    <main>
      <p>Welcome, visitor.</p>
      <Button variant="primary" onClick={handleSubmit}>
        <Link to="/game1" className="no-underline">
          <div className="text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">
            Play
          </div>
        </Link>
      </Button>
    </main>
  );
}
