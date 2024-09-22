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
  },
  py: {
    paddingVertical: 5,
  }
});

const PDFDocument = ({ height, width }) => {
  const pdfHeight = height;
  const pdfWidth = width;
  // (width/3).toFixed(2)
  const [numberOfWindow, setNumberOfWindow] = useState(0)
  const [issueDate, setIssueDate] = useState('');
  const [dateValidThrough, setDateValidThrough] = useState('')
  const [tex, setTex] = useState(0)
  const [total, setTotal] = useState(0)
  // const [hChannelQuantity, setHChannelQuantity] = useState(0)


  function findLastDivisor(originalWidth) {
    let lastDivisor = 1;  // Initialize with the first divisor

    for (let i = 1; i <= 10; i++) {  // Loop through divisors from 1 to 10
        let result = originalWidth / i;  // Divide the original width by the current divisor
        
        if (result < 43) {  // If the result is less than 43
            lastDivisor = i;  // Update the last divisor
            break;  // Stop the process
        }
    }

      // let quentityhchannel = lastDivisor - 2
    setNumberOfWindow(lastDivisor)
    // setHChannelQuantity(quentityhchannel)
    return lastDivisor;  // Return the last divisor used
  }

  useEffect(() => {
    findLastDivisor(width);
  }, [width]);


  const data = {
    id: "5df3180a09ea16dc4b95f910",
    items: [
      {
        sr: 0,
        part: "U Channel",
        quantity: 2,
        unitPrice: 136,
        // subTotal: quantity * unitPrice
      },
      {
        sr: 1,
        part: "sU Channel",
        quantity: 2,
        unitPrice: 136,
        // subTotal: quantity * unitPrice
      },
      {
        sr: 2,
        part: "H Channel",
        quantity: (numberOfWindow - 2),
        unitPrice: 256,
        // subTotal: quantity * unitPrice
      },
      {
        sr: 3,
        part: "sH Channel",
        quantity: 1,
        unitPrice: 256,
        // subTotal: quantity * unitPrice
      },
    ],
  };

  const [subTotalArr1, setSubTotalArr1] = useState([])
  useEffect(() => {
    let tempArray = [];
    let quantity
    
    // Example of 5 iterations, can be any number
    const pushItems = data.items.map((item, index) => {     
      if(item.part === "H Channel") {
        quantity = Number(Number(numberOfWindow) - 2)
        console.log('quantity: ', quantity, numberOfWindow);
        
      } else {
        quantity = Number(item.quantity)
      }
      tempArray.push(quantity * item.unitPrice)
    })

    console.log("temp: ", tempArray);
    const totalOfArray = tempArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    const texCalc = (subTotalArr1 * 13) / 100
    setTex(texCalc)
    setTotal(tex + subTotalArr1)
  setSubTotalArr1(totalOfArray)
  
  console.log("subTotalArr: ", subTotalArr1);

}, [data]);


  

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');

    const validThrough = new Date(today.setMonth(today.getMonth() + 3)); // Add 3 months
    const yearValid = validThrough.getFullYear();
    const monthValid = String(validThrough.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dayValid = String(validThrough.getDate()).padStart(2, '0');


    const issueDateFormatte = `${year}-${month}-${day}`;
    const validThroughDateFormatte = `${yearValid}-${monthValid}-${dayValid}`
    
    setIssueDate(issueDateFormatte);
    setDateValidThrough(validThroughDateFormatte)
  }, []);

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
              <Text>Issue Date: {issueDate}</Text>
              <Text>Valid Through: {dateValidThrough}</Text>
            </View>
          </View>

          {/* quote */}
          <View style={styles.quote}>
            <Text style={styles.title}>Price Quote # 168</Text>
          </View>

          
          <View style={styles.partsList}>
            {/* <Text style={styles.dateText}>{format(currentDate, 'dd-MM-yyyy')}</Text> */}
            <Table data={data} width={width} />
            <Text style={styles.noOfWindow}>Number Of Windows : {numberOfWindow} </Text>
          </View>

          <View style={styles.totalText}>
            <Text>Subtotal: ${subTotalArr1}</Text>
            <Text style={styles.py}>TAX (13%): ${tex}</Text>
            <Text>Total: ${total} </Text>
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