import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Product from "../Product";

export default function PanierCompo(props) {
        
  return (
    <TouchableOpacity style={styles.button} onPress={props.removeCart}>
      <Text style={styles.buttonText}>Retirer l'élément</Text>
    </TouchableOpacity>
  );
}
    
const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom : 70,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
