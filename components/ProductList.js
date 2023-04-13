import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Product from "../Product";

export default function ProductList(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url = "https://cabrol.alwaysdata.net/api/saeProduct";
  const fetchOptions = { method: "GET" };
  const [listeProducts, setProducts] = useState([]);

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        let l = [...listeProducts];
        dataJSON.forEach((data) => {
          l.push(new Product(data));
        });
        setProducts(l);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.pcritere]);

  return (
    <FlatList
      data={listeProducts}
      keyExtractor={(Product) => Product.idProduct.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail", { idProduct: item.idProduct })}>
            <View style={styles.item}>
              <Image source={{ uri: item.imageProduct }} style={styles.image}></Image>
            </View>
            <View style={styles.item}>
              <Text style={styles.nameProduct}>{item.nameProduct}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Detail", { idProduct: item.idProduct })}>
              <Text style={styles.buttonText}>En savoir plus</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: "gray",
  },
  nameProduct: {
    fontSize: 20,
  },
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
