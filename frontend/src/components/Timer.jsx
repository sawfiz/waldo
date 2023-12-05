import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000); // Increment timer by 1 every 1000ms (1 second)

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <p className='text-white'>Timer: {timer} seconds</p>
    </div>
  );
};

export default Timer;
