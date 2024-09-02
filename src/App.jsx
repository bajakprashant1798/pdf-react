import React, { useEffect, useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import Rectangle from './components/rectangle/Rectangle';
import RectangleGride from './components/rectangle/RectangleGride';

function App() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [colour, setColour] = useState('');
  const [panelStyle, setPanelStyle] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [glass, setGlass] = useState('');
  const [doorHardwareStyle, setDoorHardwareStyle] = useState('')
  const [hardwareColour, setHardwareColour] = useState('')
  const [layout, setLayout] = useState('');

  // const [numberOfWindow, setNumberOfWindow] = useState("")

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate the height
    if (Number(height) > 108) {
      // Set error message if height is more than 108
      setErrorMessage('Height cannot be more than 108.');
    } else {
      // Clear the error message if validation passes
      setErrorMessage('');

      // Proceed with form submission logic (e.g., send data to the server)
      console.log('Form submitted successfully');
      // You can add your form submission code here

      setSubmitted(true);
    }
  };

  const heightVelidation = () => {
    if (Number(height) > 108) {
      // Set error message if height is more than 108
      setErrorMessage('Height cannot be more than 108.');
    } else {
      setErrorMessage(null)
    }
  }


  useEffect(() => {
    heightVelidation()
  }, [height]);

  // Handle input change
  const handleHeightChange = (e) => {
    setHeight(e.target.value); // Update height state as the user types
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);

    // const originalWidth = e.target.value

    // let lastDivisor = 1;  // Initialize with the first divisor

    // for (let i = 1; i <= 10; i++) {  // Loop through divisors from 1 to 10
    //     let result = originalWidth / i;  // Divide the original width by the current divisor
        
    //     if (result < 43) {  // If the result is less than 43
    //         lastDivisor = i;  // Update the last divisor
    //         break;  // Stop the process
    //     }
    // }

    // setNumberOfWindow(lastDivisor)
    // return lastDivisor;  // Return the last divisor used
  }

  const resetForm = () => {
    setHeight('')
    setWidth('')
    setColour('')
    setPanelStyle('')
    setSubmitted(false)
    setGlass('')
    setDoorHardwareStyle('')
    setHardwareColour('')
    setLayout('')
  }

  const options = [
    "Standard",
    "Tempered",
  ];
  const layoutName = [
    "A",
    "B",
    "C",
    "D"
  ]

  return (
    <div className='p-5'>
      {/* <h1>Height and width Square Calculator</h1> */}
      <form onSubmit={handleSubmit} className="mb-5">

        <div className='py-3'>
          <label htmlFor="layout">Layouts: </label>
          <select id="layout" className='p-2 rounded-md outline-none' value={layout} onChange={(e) => setLayout(e.target.value)}>
              <option>Please choose one option </option>
              {layoutName.map((option, index) => {
                  return (
                      <option key={index}>
                          {option}
                      </option>
                  );
              })}
          </select>
        </div>


        <div className='pb-3'>
          <label htmlFor="height">Height (inch): </label>
          <input
            id="height"
            className='p-1 rounded-md outline-none'
            type="number"
            value={height}
            onChange={handleHeightChange }
            required
          />

          {/* Display error message */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        <div className='pb-3'>
          <label htmlFor="width">width (inch): </label>
            <input
              id="width"
              className='p-1 rounded-md outline-none'
              type="number"
              value={width}
              onChange={handleWidthChange}
              required
            />
        </div>

        <div className='pb-3'>
          <label htmlFor="width">Colour: </label>
            <input
              id="colour"
              className='p-1 rounded-md outline-none'
              type="text"
              value={colour}
              onChange={(e) => setColour(e.target.value)}
              
            />
        </div>

        <div className='pb-3'>
          <label htmlFor="panel">Panel Style: </label>
            <input
              id="panel"
              className='p-1 rounded-md outline-none'
              type="text"
              value={panelStyle}
              onChange={(e) => setPanelStyle(e.target.value)}
              
            />
        </div>

        <div className='pb-3'>
          <label htmlFor="door-hardware">Door Hardware Style: </label>
            <input
              id="door-hardware"
              className='p-1 rounded-md outline-none'
              type="text"
              value={doorHardwareStyle}
              onChange={(e) => setDoorHardwareStyle(e.target.value)}
              
            />
        </div>

        <div className='pb-3'>
          <label htmlFor="hardware-colour">Hardware Colour: </label>
            <input
              id="hardware-colour"
              className='p-1 rounded-md outline-none'
              type="text"
              value={hardwareColour}
              onChange={(e) => setHardwareColour(e.target.value)}
              
            />
        </div>

        <div className='pb-3'>
          <label htmlFor="glass">Glass: </label>
          <select id="glass" className='p-2 rounded-md outline-none' value={glass} onChange={(e) => setGlass(e.target.value)}>
              <option>Please choose one option </option>
              {options.map((option, index) => {
                  return (
                      <option key={index}>
                          {option}
                      </option>
                  );
              })}
          </select>
          {/* <h3>You selected: {glass} </h3> */}
        </div>

        <button type="submit">Generate PDF</button>
        <button type="button" className="mx-3" onClick={() => resetForm()}>Reset</button>
      </form>

      {submitted && (
        
        <div>
          <div>
            <PDFViewer className='w-full sm:w-full md:w-full lg:w-4/5' height={600}>
              <PDFDocument height={height} width={width} colour={colour} panelStyle={panelStyle} glass={glass} doorHardwareStyle={doorHardwareStyle} hardwareColour={hardwareColour} />
            </PDFViewer>

            <PDFDownloadLink
              document={<PDFDocument height={height} width={width} colour={colour} panelStyle={panelStyle} glass={glass} doorHardwareStyle={doorHardwareStyle} hardwareColour={hardwareColour} />}
              fileName="demo.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : <button type="button" className='my-4'>Download PDF</button>
              }
            </PDFDownloadLink>
          </div>

          <div>
            <Rectangle height={height} width={width}  />
            {/* <RectangleGride numberOfRectangles={numberOfWindow}  /> */}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
