// Libraries
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../contexts/GameContext';

// Components
// Background images
import room from '../assets/images/room.png';
import beach from '../assets/images/beach.jpg';
import dragons from '../assets/images/dragons.webp';

// Styling
import { Button, Card } from 'react-bootstrap';

export default function Home() {
  const navigate = useNavigate();
  const { startGame } = useContext(GameContext);

  const handleClick = (e) => {
    const cardId = e.currentTarget.getAttribute('data-card-id');
    startGame(cardId);
    navigate(`/game${cardId}`);
  };

  return (
    <main>
      <div className="mt-20 flex justify-center items-center gap-4">
        <Card bg="dark" text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={room} className="h-60" />
          <Card.Body>
            <Card.Title>Room</Card.Title>
            <Card.Text>Room full of lights and furniture.</Card.Text>
            <Button variant="primary" onClick={handleClick} data-card-id="1">
              <div className="text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">
                Play
              </div>
            </Button>
          </Card.Body>
        </Card>
        <Card bg="dark" text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={beach} className="h-60" />
          <Card.Body>
            <Card.Title>Beach</Card.Title>
            <Card.Text>Beach full of people.</Card.Text>
            <Button variant="primary" onClick={handleClick} data-card-id="2">
              <div className="text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">
                Play
              </div>
            </Button>
          </Card.Body>
        </Card>
        <Card bg="dark" text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dragons} className="h-60" />
          <Card.Body>
            <Card.Title>Island</Card.Title>
            <Card.Text>Island full of creatures.</Card.Text>
            <Button variant="primary" onClick={handleClick} data-card-id="3">
              <div className="text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">
                Play
              </div>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-20 flex justify-center items-center gap-4">
        <Card bg="light" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>High Score</Card.Title>
            <Card.Text>Beach full of people.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>High Score</Card.Title>
            <Card.Text>Beach full of people.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>High Score</Card.Title>
            <Card.Text>Beach full of people.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}
