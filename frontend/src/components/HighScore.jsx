// Libraries
import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';
import { format } from 'date-fns';

// Vite handles .env differently from create-react-app
const BASE_URL = import.meta.env.VITE_BASE_URL; // Set the base URL

// Styling
import { Card } from 'react-bootstrap';

export default function HighScore({ gameId }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/scores?game=${gameId}`);
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
    <Card bg="light" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>High Score</Card.Title>
        <div className="grid grid-flow-col ">
          <div style={{ width: '2rem' }}>No</div>
          <div style={{ width: '3rem' }}>Time</div>
          <div style={{ width: '4rem' }}>Name</div>
          <div style={{ width: '4rem' }}>Date</div>
        </div>
        {scoresList}
      </Card.Body>
    </Card>
  );
}
