import { useState, useEffect, useContext } from "react";
import { SafeAreaView, ScrollView, Image, StyleSheet, Text } from "react-native";
import Event from "../Event";

export default function DetailEvent(props) {
  console.log(props.idEvent)
  const url = "https://cabrol.alwaysdata.net/api/saeEvent/" + props.idEvent 

  const fetchOptions = { method: "GET" };

  const [event, setEvent] = useState({});
 

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        let f = new Event(dataJSON)
        console.log(f);
        setEvent(f)
        
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
            uri : "https://image.tmdb.org/t/p/w500" + event.photoEv
        }} 
        style={styles.image}></Image>
     <Text style={styles.title}>{event.title}</Text>
     <Text style={styles.overview}>{event.description}</Text>
     <Text style={styles.overview}>{event.catNameEv}</Text>
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

