import { useState, useEffect, useContext } from "react";
import { SafeAreaView, ScrollView, Image, StyleSheet, Text } from "react-native";
import Exhibitor from "../Exhibitor";

export default function DetailExhibitor(props) {
  console.log(props.idExhibitor)
  const url = "https://cabrol.alwaysdata.net/api/saeExhibitor/" + props.idExhibitor 

  const fetchOptions = { method: "GET" };

  const [exhibitor, setExhibitor] = useState({});
 

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        let f = new Exhibitor(dataJSON)
        console.log(f);
        setExhibitor(f)
        
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
            uri : exhibitor.photoExhib
        }} 
        style={styles.image}></Image>
     <Text style={styles.title}>{exhibitor.pseudo}</Text>
     <Text style={styles.overview}>téléphone : {exhibitor.phone}</Text>
     <Text style={styles.overview}>mail : {exhibitor.mail}</Text>
     <Text style={styles.overview}>Nom : {exhibitor.firstName} {exhibitor.lastName}</Text>
     <Text style={styles.overview}>Description : {exhibitor.description}</Text>
     <Text style={styles.overview}>catégorie : {exhibitor.catName}</Text>
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
    overview: {
        fontSize: 16,
        padding: 10,
      },
  });

