import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../contexts/GameContext';

// Styling
import { Button, Card } from 'react-bootstrap';

export default function Game({gameId, imageSrc}) {
  const navigate = useNavigate();
  const { startGame } = useContext(GameContext);

  const handleClick = () => {
    startGame(gameId);
    navigate(`/game${gameId}`);
  };
  return (
    <Card bg="dark" text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageSrc} className="h-60" />
          <Card.Body>
            <Card.Title>Room</Card.Title>
            <Button variant="primary" onClick={handleClick}>
              <div className="text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">
                Play
              </div>
            </Button>
          </Card.Body>
        </Card>
  )
}
