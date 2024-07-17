import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Rectangle from './Rectangle';
import PDFDocument from './PDFDocument';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Height and Weight Square Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Generate PDF</button>
      </form>
      {submitted && (
        <div>
          <PDFViewer width="100%" height="600">
            <PDFDocument height={height} weight={weight} />
          </PDFViewer>

          <PDFDownloadLink
            document={<PDFDocument height={height} weight={weight} />}
            fileName="height_weight_squares.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>

          {/* <Rectangle height={height} width={width} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
