import React, { useEffect, useState } from 'react';
import './Rectangle.css'

const Rectangle = ({ height, width }) => {
    
    const [newWidth, setNewWidth] = useState('');
    const [lastDivisor, setLastDivisor] = useState()
    
    const rectangles = Array(lastDivisor).fill(null);
    

    function adjustWidth(originalWidth) {
        let lastDivisor = 1;  // Initialize with the first divisor
        let result
        for (let i = 1; i <= 10; i++) {  // Loop through divisors from 1 to 10
            result = (originalWidth / i).toFixed(3);  // Divide the original width by the current divisor
            
            if (result < 43) {  // If the result is less than 43
                lastDivisor = i;  // Update the last divisor
                break;  // Stop the process
            }
        }
    
        setNewWidth(result)
        setLastDivisor(lastDivisor)
        return result;  // Return the last divisor used
    }
    

    useEffect(() => {
        adjustWidth(width);
    }, [width]);

//   const rectangleContainer = {
//     display: 'flex',
//     width: 'fit-content'
//   };

  return (

    <div className="grid-container"
        style={ {
            display: 'grid',
            gridTemplateColumns: `repeat(${lastDivisor}, 1fr)`,
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
};

export default Rectangle;
