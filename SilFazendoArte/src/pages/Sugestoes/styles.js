import * as React from 'react';
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      marginBottom: 0,
      marginTop: -55,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subHeaderText: {
      fontSize: 16,
      color: 'gray',
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
  });