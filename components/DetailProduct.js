import { useState, useEffect, useContext } from "react";
import { SafeAreaView, ScrollView, Image, StyleSheet, Text } from "react-native";
import Product from "../Product";

export default function DetailProduct(props) {
  console.log(props.idProduct)
  const url = "https://cabrol.alwaysdata.net/api/saeProduct/" + props.idProduct 

  const fetchOptions = { method: "GET" };

  const [product, setProduct] = useState({});
 

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        let f = new Product(dataJSON)
        console.log(f);
        setProduct(f)
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
      <Image 
        source={ { 
            uri : product.imageProduct
        }} 
        style={styles.image}></Image>
     <Text style={styles.title}>{product.nameProduct}</Text>
     <Text style={styles.price}>Prix {product.price}€</Text>
     <Text style={styles.description}>Description : {product.descriptionProduct}</Text>
    </ScrollView>
   </SafeAreaView>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    image: {
      width: 300,
      height: 300,
      margin: 5,
      backgroundColor: 'gray'
    },
    title: {
        fontSize: 20,
        margin: 5,
      },
      price: {
        fontSize: 15,
        margin: 5,
      },
    description: {
        fontSize: 16,
        padding: 10,
      },
  });

