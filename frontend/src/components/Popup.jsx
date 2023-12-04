import React from 'react';

export default function Popup({ mousePosition }) {
  const {x, y} = mousePosition;
  const componentStyle = {
    position: 'fixed',
    top: y,
    left: x,
    // Additional styles as needed
    backgroundColor: 'lightblue',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={componentStyle}>
      <p>
        This component is placed at coordinates ({x}, {y}).
      </p>
    </div>
  );
}
