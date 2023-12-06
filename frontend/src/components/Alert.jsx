import React, { useState, useEffect } from 'react';

const Alert = ({ message, color }) => {

  return (
    <div>
      { color === 'green' &&
        (<div className="fixed top-1 left-1/2 z-20 p-4 text-lg rounded-md bg-green-800 text-white flex items-center">
          {message}
        </div>)
      }
      { color === 'red' &&
        (<div className="fixed top-1 left-1/2 z-20 p-4 text-lg rounded-md bg-red-800 text-white flex items-center">
          {message}
        </div>)
      }
    </div>
  )
};

export default Alert;
