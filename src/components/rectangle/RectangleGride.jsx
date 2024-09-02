import React from 'react';
import './Rectangle.css';  // Assuming you have your CSS in a separate file

function RectangleGride({ height, width, numberOfRectangles }) {
  const rectangles = Array(numberOfRectangles).fill(null);

  return (
    <div className="grid-container"
    style={ {
        display: 'grid',
        gridTemplateColumns: `repeat(${numberOfRectangles}, 1fr)`,
        gridTemplateRows: 'repeat(2, 1fr)'
     }}
    >
        <p className='height-position'>{height}inch</p>
      {rectangles.map((_, index) => (
        <div className="rectangle"  key={index}>
          <div className="side top">{width}inch</div>
          <div className="side bottom"></div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
        
      ))}

      {rectangles.map((_, index) => (
        <div className="rectangle" key={index}>
          <div className="side top"></div>
          <div className="side bottom">{width}inch</div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
        
      ))}
    </div>
  );
}

export default RectangleGride;
