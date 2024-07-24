import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});

const PDFDocument = ({ height, width, colour, panelStyle, glass, doorHardwareStyle, hardwareColour }) => {
  const pdfHeight = height;
  const pdfWidth = width > 108 ? (width/3).toFixed(2) : width;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Height : {pdfHeight} inch </Text>
          <Text style={styles.text}>Width : {pdfWidth} inch </Text>
          <Text style={styles.text}>Colour : {colour} </Text>
          <Text style={styles.text}>Panel Style : {panelStyle} </Text>
          <Text style={styles.text}>Glass : {glass} </Text>
          <Text style={styles.text}>Door Hardware Style : {doorHardwareStyle} </Text>
          <Text style={styles.text}>Hardware Colour : {hardwareColour} </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
