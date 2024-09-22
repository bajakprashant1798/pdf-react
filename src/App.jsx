import React, { useEffect, useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import Rectangle from './components/rectangle/Rectangle';
import RadioBtn from './components/radioBtn/RadioBtn';
import DoorDistanceControl from './components/doorDistanceBar/DoorDistanceControl';
// import './index.css'

const doorTypeOptions = [
  { label: 'Single Door', value: 'Single Door' },
  { label: 'Double Door', value: 'Double Door' },
  { label: 'Sliding Door', value: 'Sliding Door' },
];

const doorSubTypeOptions = [
  { label: 'Insliding', value: 'Inswing' },
  { label: 'Outsliding', value: 'Outswing' },
];

const doorFaceOptions = [
  { label: 'Front', value: 'Front' },
  { label: 'Left', value: 'Left' },
  { label: 'Right', value: 'Right' },
];

const doorWidthHightOptions = [
  { label: '80\x22 x 32\x22', value: '80 x 32' },
  { label: '80\x22 x 34\x22', value: '80 x 34' },
  { label: '80\x22 x 36\x22', value: '80 x 36' },
];

const imageTypeOptions = [
  { value: 'A', src: '/a.png', alt: 'Image 1' },
  { value: 'B', src: '/b.png', alt: 'Image 2' },
  { value: 'C', src: '/c.png', alt: 'Image 3' },
  { value: 'D', src: '/d.png', alt: 'Image 4' }
];

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

  // State to hold the selected image

  // door distance variable usestate
  const [ doorDistance, setDoorDistance ] = useState(null)

  const [selectedDoorType, setSelectedDoorType] = useState(null);
  const [selectedDoorSubType, setSelectedDoorSubType] = useState(null);
  const [selectedFaceType, setSelectedFaceType] = useState(null);
  const [selectedDoorWidthHight, setSelectedDoorWidthHight] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // reset form
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
    setSelectedDoorType(null)
    setSelectedDoorSubType(null)
    setSelectedFaceType(null)
    setSelectedDoorWidthHight(null)
    setSelectedImage(null)
    setDoorDistance(null)
    setLayout('')
  }


  // Array of images (You can replace these paths with actual image paths)


  const handleImgSelect = (image) => {
    setSelectedImage(image.src); // Save the selected image URL
  };

  const handleDoorTypeSelect = (value) => {
    setSelectedDoorType(value);
  };

  const handleDoorSubTypeSelect = (value) => {
    setSelectedDoorSubType(value);
  };

  const handleDoorWidthHightSelect = (doorWidthHight) => {
    setSelectedDoorWidthHight(doorWidthHight);
  };

  const handleFaceTypeSelect = (faceTypeValue) => {
    setSelectedFaceType(faceTypeValue);
  };

  // door distance jandler
  const handleDistance = (value) => {
    setDoorDistance(value);
  };

  // Handle input change
  const handleHeightChange = (e) => {
    setHeight(e.target.value); // Update height state as the user types
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  }

 
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




  return (
    <div className='p-5'>
      <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto mb-5">
        
        <h2 className='text-center w-100 text-4xl font-semibold mb-5'>Company Name</h2>
        
        {/* <div className='py-5'>
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
        </div> */}



        <div className='glassmorphism'>
          <h2>Layout:</h2>
          <div className="radio-group flex flex-wrap pb-2">
              {imageTypeOptions.map((image, index) => (
                  <label key={index} className='flex mr-9 mb-5'>
                  <div className='mr-2'>
                    <input
                        type="radio"
                        name="imageOption"
                        className=''
                        value={image.value}
                        onChange={() => handleImgSelect(image)}
                        style={{  }} // Hide the radio button
                    />
                    <span className='ml-2 text-xl'>{image.value}</span>
                  </div>
                  <img
                      src={image.src}
                      alt={image.alt}
                      className={selectedImage === image.src ? 'selected' : ''}
                      style={{
                      width: '250px',
                      height: '250px',
                      border: selectedImage === image.src ? '3px solid blue' : '2px solid transparent',
                      cursor: 'pointer',
                      }}
                  />
                  </label>
              ))}
          </div>
        </div>

        

        {/* Display the selected image */}
        {/* {selectedImage && (
          <div className="selected-image mb-6">
            <h3>Selected Layout:</h3>
            <img src={selectedImage} alt="Selected" style={{ width: '200px', height: '200px' }} />
          </div>
        )} */}
           

        <div className='mt-5 glassmorphism'>
          {/* <p className='pb-1 text-xl'>Window Dimensions:</p> */}

          {selectedImage && (
            <div className="selected-image">
              <h3>Dimensions:</h3>
              <img src={selectedImage} alt="Selected" style={{ width: '200px', height: '200px' }} />
            </div>
          )}

          <div className='md:grid md:grid-cols-2 md:gap-4 mt-3 '>
            <div className='mb-2 md:mb-0 glassmorphism'>
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

            <div className='glassmorphism'>
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


        


        {/* <div className='pb-5 md:grid md:grid-cols-2 md:gap-4'>
          <div className='mb-5 md:mb-0'>
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
        </div> */}


        <div className='mt-5 glassmorphism'>
          <label className='block text-xl pb-1'>What face you need your door to be on: </label>

            <RadioBtn options={doorFaceOptions} onSelect={handleFaceTypeSelect} name={"doorFace"} />
            {
              <h3>Door Face: {selectedFaceType}</h3>  
            }
        </div>


        <div className='mt-5 glassmorphism'>
          <label className='block text-xl pb-1'>Door Type: </label>

            <RadioBtn options={doorTypeOptions} onSelect={handleDoorTypeSelect} name={"doorType"} />
            <h3>Door Type: {selectedDoorType}</h3> 
            
            <h3 className='text-xl mt-3'> Door Sub Type: </h3> 
            { selectedDoorType === "Single Door" ?
              <div> 
                <RadioBtn options={doorSubTypeOptions} onSelect={handleDoorSubTypeSelect} name={"doorSubType"} /> 
                <h3>Door Sub Type: {selectedDoorSubType}</h3>
              </div>
              : selectedDoorType 
            }
                
            
        </div>



        <div className='mt-5 glassmorphism'>
          {/* <label className='block text-xl pb-1'>Width and Height of door: </label> */}
          <label className='block text-xl pb-1'>Door Size: </label>
            <RadioBtn options={doorWidthHightOptions} onSelect={handleDoorWidthHightSelect} name={"doorWidthHight"} />
            
            {/* <h3>Door Type: {selectedDoorWidthHight}</h3> */}
        </div>


        <div className="mt-5 glassmorphism">
          <DoorDistanceControl doorDistance={handleDistance}  />
          {/* <h3>Door Distance: {doorDistance} </h3> */}
        </div>



        {/* <div className='mt-5 glassmorphism'>
          <label htmlFor="panel" className='block text-xl pb-1'>Panel Style: </label>
          <select id="panel" className='p-2 rounded-md outline-none w-full' value={panelStyle} onChange={(e) => setPanelStyle(e.target.value)}>
              <option>Select Panel Style </option>
              {panelStyleOptions.map((option, index) => {
                  return (
                      <option key={index}>
                          {option}
                      </option>
                  );
              })}
          </select>
        </div>

        <div className='mt-5 glassmorphism'>
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
        </div> */}

        <div className='mt-5 flex flex-col md:flex-row justify-center items-center'>
          <button type="submit" className='bg-white text-black font-semibold mb-3 md:mb-0'>Generate PDF</button>
          <button type="button" className="mx-3" onClick={() => resetForm()}>Reset</button>
        </div>
      </form>

      {submitted && (
        
        <div>

          <div>
            <Rectangle height={height} width={width} doorDistance={doorDistance} />
            {/* <RectangleGride numberOfRectangles={numberOfWindow}  /> */}
          </div>

          <div>
          {/* md:w-full lg:w-4/5 */}
            <h3 className='text-2xl font-medium text-center mb-3'>Quotation</h3>
            <PDFViewer className='w-full sm:w-full ' height={600}>
              <PDFDocument height={height} width={width}  />
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

        </div>
      
      )}

    </div>
  );
}

export default App;
