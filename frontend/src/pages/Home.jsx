// Libraries
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

import { GameContext } from '../contexts/GameContext';

// Vite handles .env differently from create-react-app
const BASE_URL = import.meta.env.VITE_BASE_URL; // Set the base URL

// Components
import Game from '../components/Game';


// Background images
import room from '../assets/images/room.png';
import beach from '../assets/images/beach.jpg';
import dragons from '../assets/images/dragons.webp';

// Styling
import { Button, Card } from 'react-bootstrap';

export default function Home() {
  const navigate = useNavigate();
  const { startGame } = useContext(GameContext);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/scores`);
        console.log(
          '🚀 ~ file: Home.jsx:31 ~ fetchData ~ response:',
          response.data.scores_list
        );
        setScores(response.data.scores_list);
      } catch (error) {
        console.log('🚀 ~ file: Home.jsx:33 ~ fetchData ~ error:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const scoresList = scores.map((score, index) => (
    <div key={score._id} className="grid grid-flow-col ">
      <div style={{ width: '2rem' }}>{index + 1}</div>
      <div style={{ width: '3rem' }}>{score.time}</div>
      <div style={{ width: '4rem' }}>{score.name}</div>
      <div style={{ width: '8rem' }}>
        {format(new Date(score.date), 'yyyy-MM-dd')}
      </div>
    </div>
  ));



  return (
    <main>
      <div className="mt-20 flex justify-center items-center gap-4">
       <Game gameId={1} imageSrc={room} />
       <Game gameId={2} imageSrc={beach} />
       <Game gameId={3} imageSrc={dragons} />
      </div>
      
      <div className="mt-20 flex justify-center items-center gap-4">
        <Card bg="light" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>High Score</Card.Title>
            <Card.Text>
              <div className="grid grid-flow-col ">
                <div style={{ width: '2rem' }}>No</div>
                <div style={{ width: '3rem' }}>Time</div>
                <div style={{ width: '4rem' }}>Name</div>
                <div style={{ width: '4rem' }}>Date</div>
              </div>
              {scoresList}
            </Card.Text>
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
