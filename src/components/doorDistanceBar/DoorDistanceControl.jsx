import { useState } from 'react';

const DoorDistanceControl = () => {
  const totalWallWidth = 500; // Total wall width in pixels
  const totalInches = 100;    // Total wall width in inches
  const [doorDistanceInInches, setDoorDistanceInInches] = useState(0); // Distance in inches

  // Handle change from progress bar (slider)
  const handleSliderChange = (e) => {
    const distanceInPixels = e.target.value;
    const distanceInInches = (distanceInPixels / totalWallWidth) * totalInches;
    setDoorDistanceInInches(distanceInInches);
  };

  // Handle change from input field
  const handleInputChange = (e) => {
    let inputInches = parseFloat(e.target.value);
    if (isNaN(inputInches)) {
      inputInches = 0; // Default to 0 if input is invalid
    }
    if (inputInches >= 0 && inputInches <= totalInches) {
      setDoorDistanceInInches(inputInches);
    }
  };

  // Convert inches back to pixels for door positioning
  const doorPositionInPixels = (doorDistanceInInches / totalInches) * totalWallWidth;

  return (
    <div>
      <h2>Control the Door's Distance from the Left Wall</h2>
      
      {/* Wall and Door Representation */}
      <div 
        className="wall" 
        style={{
          position: 'relative',
          width: `${totalWallWidth}px`,
          height: '30px',
          backgroundColor: '#f0f0f0',
          border: '2px solid black',
          marginBottom: '20px',
        }}
      >
        {/* Door */}
        <div 
          className="door"
          style={{
            position: 'absolute',
            left: `${doorPositionInPixels}px`,  // Door position in pixels
            width: '30px',
            height: '30px',
            backgroundColor: 'brown',
            transition: 'left 0.2s ease', // Smooth movement
          }}
        />
      </div>

      {/* Progress Bar for User Control */}
      <div>
        <label htmlFor="distanceSlider">
          Set Door Distance by Slider: {doorDistanceInInches.toFixed(2)} inches
        </label>
        <input 
          id="distanceSlider"
          type="range"
          min="0"
          max={totalWallWidth}   // Slider moves in pixels
          value={doorPositionInPixels}  // Corresponds to the door's pixel position
          onChange={handleSliderChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Input Field for User Control */}
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="distanceInput">
          Enter Door Distance (in inches):
        </label>
        <input 
          id="distanceInput"
          type="number"
          min="0"
          max={totalInches}  // Maximum value in inches
          value={doorDistanceInInches}
          onChange={handleInputChange}
          style={{ width: '100px', marginLeft: '10px' }}
        />
      </div>

      {/* Show the distance in inches */}
      <div className="distance-info" style={{ marginTop: '20px' }}>
        <p>Door is {doorDistanceInInches.toFixed(2)} inches away from the left side of the wall.</p>
      </div>
    </div>
  );
};

export default DoorDistanceControl;
