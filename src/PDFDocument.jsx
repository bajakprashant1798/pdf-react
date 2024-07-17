import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

const PDFDocument = ({ height, weight }) => {
  const heightSquare = Math.pow(Number(height), 2);
  const weightSquare = Math.pow(Number(weight), 2);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Height: {height} cm</Text>
          <Text style={styles.text}>Weight: {weight} kg</Text>
          <Text style={styles.text}>Height Square: {heightSquare} cm²</Text>
          <Text style={styles.text}>Weight Square: {weightSquare} kg²</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
