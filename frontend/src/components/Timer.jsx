import React, { useState, useEffect, useContext, useRef } from 'react';
import { GameContext } from '../contexts/GameContext'; // Import your GameContext

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const { gameOver, setTime } = useContext(GameContext);
  const intervalIdRef = useRef(null); // Use useRef to maintain intervalId across renders

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalIdRef.current);
  }, []);

  useEffect(() => {
    setTime(timer); // setTime is a function in your GameContext to update the time
    if (gameOver) {
      // If gameOver signal is true, stop the timer
      clearInterval(intervalIdRef.current);
    }
  }, [gameOver, timer, setTime]);

  return (
    <div>
      <p className='text-white'>Timer: {timer} seconds</p>
    </div>
  );
};

export default Timer;