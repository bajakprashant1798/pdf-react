import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import TableRow from "./TableRow";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const ItemsTable = ({ data, width }) => (
  <View style={styles.tableContainer}>
    {/*<TableHeader />*/}
    <TableRow items={data.items} width={width} />
    {/*<TableFooter items={data.items} />*/}
  </View>
);

export default ItemsTable;