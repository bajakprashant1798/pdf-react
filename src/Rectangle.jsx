import React from 'react';

const Rectangle = ({ height, width }) => {
  const rectangleStyle = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: 'blue',
    marginTop: '20px',
  };

  return <div style={rectangleStyle}></div>;
};

export default Rectangle;
