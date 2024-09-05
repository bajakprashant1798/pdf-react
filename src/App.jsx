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
  const panelStyleOptions = [
    "Single Strom O/S",
    "Double Strom O/S",
    "Single Strom I/S",
    "Patio Strom O/X",
    "Patio Strom X/O",
  ]

  return (
    <div className='p-5'>
      {/* <h1>Height and width Square Calculator</h1> */}

      <h2 className='text-center w-100 text-4xl font-semibold mb-5'>Compney Name</h2>

      <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto mb-5">

        <div className='py-5'>
          <label htmlFor="layout" className='block text-xl pb-1'>Layout: </label>
          <select id="layout" className='p-2 rounded-md outline-none w-full' value={layout} onChange={(e) => setLayout(e.target.value)}>
              <option>Select Layout </option>
              {layoutName.map((option, index) => {
                  return (
                      <option key={index}>
                          {option}
                      </option>
                  );
              })}
          </select>
        </div>


        <div className='pb-5'>
          <p className='pb-1 text-xl'>Window Dimensions:</p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='pr-4'>
              <label htmlFor="width" className='pb-1'>width(inch): </label>
              <input
                id="width"
                className='p-1 rounded-md outline-none w-full'
                type="number"
                value={width}
                onChange={handleWidthChange}
                required
              />
            </div>

            <div >
              <label htmlFor="height" className='pb-1'>Height(inch): </label>
              <input
                id="height"
                className='p-1 rounded-md outline-none w-full'
                type="number"
                value={height}
                onChange={handleHeightChange }
                required
              />
            </div>
          </div>

          {/* Display error message */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        {/* <div className='pb-3'>
          
        </div> */}

        <div className='pb-5 grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor="colour" className='block text-xl pb-1'>Colour: </label>
            <input
                id="colour"
                className='p-1 rounded-md outline-none w-full'
                type="text"
                value={colour}
                onChange={(e) => setColour(e.target.value)}
                
            />
          </div>

          <div>
          <label htmlFor="hardware-colour" className='block text-xl pb-1'>Hardware Colour: </label>
            <input
              id="hardware-colour"
              className='p-1 rounded-md outline-none w-full'
              type="text"
              value={hardwareColour}
              onChange={(e) => setHardwareColour(e.target.value)}
              
            />
          </div>
        </div>

        {/* <div className='pb-5'>
          
        </div> */}

        <div className='pb-5'>
          <label htmlFor="door-hardware" className='block text-xl pb-1'>Door Hardware Style: </label>
            <input
              id="door-hardware"
              className='p-1 rounded-md outline-none w-full'
              type="text"
              value={doorHardwareStyle}
              onChange={(e) => setDoorHardwareStyle(e.target.value)}
              
            />
        </div>

        <div className='pb-5'>
          <label htmlFor="panel" className='block text-xl pb-1'>Panel Style: </label>
          <select id="panel" className='p-2 rounded-md outline-none w-full' value={layout} onChange={(e) => setLayout(e.target.value)}>
              <option>Select Panel Style </option>
              {panelStyleOptions.map((option, index) => {
                  return (
                      <option key={index}>
                          {option}
                      </option>
                  );
              })}
          </select>

          {/* <input
            id="panel"
            className='p-1 rounded-md outline-none w-full'
            type="text"
            value={panelStyle}
            onChange={(e) => setPanelStyle(e.target.value)}
            
          /> */}

        </div>

        <div className='pb-5'>
          <label htmlFor="glass" className='block text-xl pb-1'>Glass: </label>
          <select id="glass" className='p-2 rounded-md outline-none w-full' value={glass} onChange={(e) => setGlass(e.target.value)}>
              <option>Select Glass Style </option>
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

        <div className='flex justify-center items-center'>
          <button type="submit" className='bg-white text-black font-semibold'>Generate PDF</button>
          <button type="button" className="mx-3" onClick={() => resetForm()}>Reset</button>
        </div>
      </form>

      {submitted && (
        
        <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
          <div>
          {/* md:w-full lg:w-4/5 */}

            <h3 className='text-2xl font-medium text-center mb-3'>Quotation</h3>
            <PDFViewer className='w-full sm:w-full ' height={600}>
              <PDFDocument height={height} width={width} colour={colour} panelStyle={panelStyle} glass={glass} doorHardwareStyle={doorHardwareStyle} hardwareColour={hardwareColour} />
            </PDFViewer>

            <div className='flex justify-center items-center'>
              <PDFDownloadLink
                document={<PDFDocument height={height} width={width} colour={colour} panelStyle={panelStyle} glass={glass} doorHardwareStyle={doorHardwareStyle} hardwareColour={hardwareColour} />}
                fileName="demo.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : <button type="button" className='my-4'>Download PDF</button>
                }
              </PDFDownloadLink>
            </div>
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
