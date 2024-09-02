import React, { Fragment } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";


Font.register({ family: 'Roboto', fontWeight: 700 });

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // alignItems: "center",
    paddingBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: 0.5,
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

const TableRow = ({ items }) => {
  const rows = items.map((item) => (
    
    <View style={styles.row} key={item.sr.toString()}>
      <Text style={styles.part}>{item.part}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Text style={styles.unitPrice}>${item.unitPrice}</Text>
      <Text style={styles.subTotal}>${(item.quantity * item.unitPrice)}</Text>
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
    </Fragment>;
};

export default TableRow;