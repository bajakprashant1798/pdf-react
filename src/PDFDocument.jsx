import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Table from './components/table/Table';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
    fontSize: 11,
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
  // text: {
  //   fontSize: 14,
  //   // textAlign: 'center',
  //   marginBottom: 10,
  // },
  dateText: {
    textAlign: "right",
    paddingVertical: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
  },
  tableColHeader: {
    backgroundColor: '#d3d3d3',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTop: 1,
    paddingTop: 10,
  },
  partsList: {
    borderTop: 1,
    paddingVertical: 20,
  },
  quote: {
    borderTop: 1,
    paddingTop: 20,
  },
  customerDetails: {
    justifyContent: "space-between"
  },
  noOfWindow: {
    paddingTop: 20, 
  },
  totalText: {
    borderTop: 1,
    paddingTop: 20,
    textAlign: "right",
  }
});

const PDFDocument = ({ height, width, colour, panelStyle, glass, doorHardwareStyle, hardwareColour }) => {
  const pdfHeight = height;
  const pdfWidth = width;
  // (width/3).toFixed(2)
  const [numberOfWindow, setNumberOfWindow] = useState("")
  const currentDate = new Date();

  const data = {
    id: "5df3180a09ea16dc4b95f910",
    items: [
      {
        sr: 1,
        part: "part1",
        quantity: 2,
        unitPrice: 136,
      },
      {
        sr: 2,
        part: "part2",
        quantity: 8,
        unitPrice: 256,
      },
    ],
  };



  function findLastDivisor(originalWidth) {
    let lastDivisor = 1;  // Initialize with the first divisor

    for (let i = 1; i <= 10; i++) {  // Loop through divisors from 1 to 10
        let result = originalWidth / i;  // Divide the original width by the current divisor
        
        if (result < 43) {  // If the result is less than 43
            lastDivisor = i;  // Update the last divisor
            break;  // Stop the process
        }
    }

    setNumberOfWindow(lastDivisor)
    return lastDivisor;  // Return the last divisor used
  }

  useEffect(() => {
    findLastDivisor(width);
  }, [width]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* Header */}
          <View >
            <Text style={styles.title}>ABCD Company</Text>
          </View>
          
          <View style={styles.header}>
            <View>
              <Text>Customer: [Client's company name]</Text>
              <Text>Business number: [Client's business number]</Text>
            </View>
            <View>
              <Text>Issue Date: 2021-06-01</Text>
              <Text>Valid Through: 2021-09-01</Text>
            </View>
          </View>

          {/* quote */}
          <View style={styles.quote}>
            <Text style={styles.title}>Price Quote # 168</Text>
          </View>

          
          <View style={styles.partsList}>
            {/* <Text style={styles.dateText}>{format(currentDate, 'dd-MM-yyyy')}</Text> */}
            <Table data={data} />
            <Text style={styles.noOfWindow}>Number Of Window : {numberOfWindow} </Text>
          </View>

          <View style={styles.totalText}>
            <Text>Subtotal: </Text>
            <Text>TAX(13%): </Text>
            <Text>Total: </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <View>
              <Text>[Company Name]</Text>
              <Text>Business number: [Business number]</Text>
            </View>
            <View>
              <Text>[Address]</Text>
              <Text>Phone: [Phone number]</Text>
            </View>
            <View>
              <Text>[Payment Details]</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;


{/* 
<Text style={styles.text}>Height : {pdfHeight} inch </Text>
<Text style={styles.text}>Width : {pdfWidth} inch </Text>
<Text style={styles.text}>Colour : {colour} </Text>
<Text style={styles.text}>Panel Style : {panelStyle} </Text>
<Text style={styles.text}>Glass : {glass} </Text>
<Text style={styles.text}>Door Hardware Style : {doorHardwareStyle} </Text>
<Text style={styles.text}>Hardware Colour : {hardwareColour} </Text>
*/}