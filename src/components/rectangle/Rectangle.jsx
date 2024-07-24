import React from 'react';
import './Rectangle.css'

const Rectangle = ({ height, width }) => {
    
    const newWidth = width > 108 ? (width/3).toFixed(2) : width;

//   const rectangleStyle = {
//     height: `230px`,
//     width: `120px`,
//     backgroundColor: 'none',
//     position: 'relative',
//     // margin: '20px auto',
//     border: '3px solid white',
//   };

  const rectangleContainer = {
    display: 'flex',
    width: 'fit-content'
  };

  return (
    <div className='flex justify-center my-10'>
        <div className='grid grid-rows-2 gap-0'>
            <div style={rectangleContainer}>
                <div className='rectangleStyle'>
                    <div className="side top">{newWidth}inch</div>
                    {/* <div className="side right"></div> */}
                    {/* <div className="side bottom">{newWidth}px</div> */}
                    <div className="side left">{height}inch</div>
                </div>
                <div className='rectangleStyle'>
                    <div className="side top">{newWidth}inch</div>
                    {/* <div className="side right"></div> */}
                    {/* <div className="side bottom">{newWidth}px</div> */}
                    {/* <div className="side left"></div> */}
                </div>
                <div className='rectangleStyle'>
                    <div className="side top">{newWidth}inch</div>
                    <div className="side right">{height}inch</div>
                    {/* <div className="side bottom">{newWidth}px</div> */}
                    {/* <div className="side left"></div> */}
                </div>
            </div>

            <div style={rectangleContainer}>
                <div className='rectangleStyle'>
                    {/* <div className="side top">{newWidth}px</div> */}
                    {/* <div className="side right"></div> */}
                    <div className="side bottom">{newWidth}inch</div>
                    {/* <div className="side left">{height}inch</div> */}
                </div>
                <div className='rectangleStyle'>
                    {/* <div className="side top">{newWidth}px</div> */}
                    {/* <div className="side right"></div> */}
                    <div className="side bottom">{newWidth}inch</div>
                    {/* <div className="side left"></div> */}
                </div>
                <div className='rectangleStyle'>
                    {/* <div className="side top">{newWidth}px</div> */}
                    {/* <div className="side right">{height}inch</div> */}
                    <div className="side bottom">{newWidth}inch</div>
                    {/* <div className="side left"></div> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Rectangle;
