import * as React from 'react';
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
    header: {
      marginBottom: 0,
      marginTop: -55,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 55
    },
    subHeaderText: {
      fontSize: 16,
      color: 'gray',
      paddingBottom: 15
    },
    map: {
      width: '90%',
      height: 200,
    textAlign: "center"
    },
    description: {
      margin: 20,
      fontSize: 16,
      lineHeight: 24,
      textAlign: "justify",
    },
    titleProduto: {
      margin: 20,
      fontSize: 16,
      fontWeight: "bold",
      lineHeight: 24,
      textAlign: "left",
    },
    descriptionProdutos: {
      margin: 20,
      fontSize: 16,
      lineHeight: 24,
      textAlign: "center",
    },
    
  });