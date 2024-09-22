import React, { Fragment, useEffect, useState } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";


Font.register({ family: 'Roboto', fontWeight: 700 });

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // alignItems: "center",
    paddingBottom: 5,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: 0.5,
  },
  rowSubTotal: {
    flexDirection: "row",
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderTop: 1,
    borderBottom: 1,
  },
  part: {
    width: "30%",
    fontWeight: 700,
  },
  quantity: {
    width: "20%",
    fontWeight: 700,
  },
  unitPrice: {
    width: "25%",
    fontWeight: 700,
  },
  subTotal: {
    width: "25%",
    fontWeight: 700,
  },
  text: {
    fontSize: 14,
    // textAlign: 'center',
    marginBottom: 10,
  },
});

const TableRow = ({ items, width }) => {

  const [subTotalArr, setSubTotalArr] = useState([])
  const [numberOfWindow1, setNumberOfWindow1] = useState(0)

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
    setNumberOfWindow1(lastDivisor)
    // setHChannelQuantity(quentityhchannel)
    return lastDivisor;  // Return the last divisor used
  }

  useEffect(() => {
    findLastDivisor(width);
  }, [width]);

  useEffect(() => {
      let tempArray = [];
      let quantity
      // Example of 5 iterations, can be any number
      const pushItems = items.map((item, index) => {     
        if(item.part === "H Channel") {
          quantity = Number(Number(numberOfWindow1) - 2)
          console.log('quantity: ', quantity, numberOfWindow1);
          
        } else {
          quantity = Number(item.quantity)
        }
        tempArray.push(quantity * item.unitPrice)
      })

      console.log("temp: ", tempArray);
      const totalOfArray = tempArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    setSubTotalArr(totalOfArray)
    
    console.log("subTotalArr: ", subTotalArr);

  }, [items]);

  const rows = items.map((item) => (
    <View style={styles.row} key={item.sr.toString()}>
      <Text style={styles.part}>{item.part}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Text style={styles.unitPrice}>${item.unitPrice}</Text>
      <Text style={styles.subTotal}>${item.quantity * item.unitPrice}</Text>
    </View>
  ));
  return <Fragment>
    <View style={styles.rowContainer}>
      <Text style={styles.part}>Parts</Text>
      <Text style={styles.quantity}>Quantity</Text>
      <Text style={styles.unitPrice}>Unit Price</Text>
      <Text style={styles.subTotal}>Subtotal</Text>
    </View>

    {rows}

    <View style={styles.rowSubTotal}>
      <Text style={styles.part}></Text>
      <Text style={styles.quantity}></Text>
      <Text style={styles.unitPrice}></Text>
      <Text style={styles.subTotal}>
        Subtotal: ${subTotalArr}
      </Text>
    </View>
    </Fragment>;
};

export default TableRow;