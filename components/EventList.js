import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Event from "../Event";

export default function EventsList(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url =
    "https://cabrol.alwaysdata.net/api/saeEvent"

  const fetchOptions = { method: "GET" };

  const [listeEvents, setEvents] = useState([]);

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
       // console.log(dataJSON);
        let l = [...listeEvents]
        dataJSON.forEach((data)=>{
          l.push(new Event(data))
        })
        setEvents(l);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.pcritere]);

  return (
  <FlatList
    data={listeEvents}
    keyExtractor={ (Event) => Event.idEvent.toString() }
    renderItem={({item}) => {
        return(
          <TouchableOpacity
              onPress={ () =>	props.navigation.navigate("Detail", {idEvent:item.idEvent})}>

                <View style={styles.item}> 
                  <Image 
                        source={ { 
                            uri : item.photoEv
                            
                        }} 
                        style={styles.image}></Image>
                </View>
                <View style={styles.item}> 
                    <Text style={styles.title}>{item.title}</Text>
                </View>
          </TouchableOpacity>
        )
      }
    }
    />
  
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
     //flex: 1,
     justifyContent: 'center',
     // paddingTop: 30,
     // borderRadius: 2,
     // height: 140,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 120,
      margin: 5,
      backgroundColor: 'gray'
    },
    title: {
      fontSize: 20,
    },

  });

