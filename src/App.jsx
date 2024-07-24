import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import Rectangle from './components/rectangle/Rectangle';

function App() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [colour, setColour] = useState('');
  const [panelStyle, setPanelStyle] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [glass, setGlass] = useState('');
  const [doorHardwareStyle, setDoorHardwareStyle] = useState('')
  const [hardwareColour, setHardwareColour] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setHeight('')
    setWidth('')
    setColour('')
    setPanelStyle('')
    setSubmitted(false)
    setGlass('')
    setDoorHardwareStyle('')
    setHardwareColour('')
  }

  const options = [
    "Standard",
    "Tempered",
  ];

  return (
    <div className='p-5'>
      {/* <h1>Height and width Square Calculator</h1> */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className='py-3'>
          <label htmlFor="height">Height (inch): </label>
          <input
            id="height"
            className='p-1 rounded-md outline-none'
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>

        <div className='pb-3'>
          <label htmlFor="width">width (inch): </label>
            <input
              id="width"
              className='p-1 rounded-md outline-none'
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
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
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
