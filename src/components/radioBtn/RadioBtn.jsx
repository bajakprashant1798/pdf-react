import React, { useState } from 'react'

function RadioBtn({ options, onSelect, name }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      onSelect(value);
    };
  
    return (
      <div>
        {/* <h3>Select an option:</h3> */}
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              // id={option.value}
              className='mr-2'
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={(e) => handleOptionChange(e)}
            />
            {/* <label htmlFor={option.value}>{option.label}</label> */}
            <label htmlFor={option.value} className={selectedOption === option.value ? 'selected' : ''}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  };

export default RadioBtn