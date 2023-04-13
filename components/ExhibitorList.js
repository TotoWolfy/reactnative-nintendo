import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Exhibitor from "../Exhibitor";

export default function ExhibitorsList(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url =
    "https://cabrol.alwaysdata.net/api/saeExhibitor"

  const fetchOptions = { method: "GET" };

  const [listeExhibitors, setExhibitors] = useState([]);

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
       // console.log(dataJSON);
        let l = [...listeExhibitors]
        dataJSON.forEach((data)=>{
          l.push(new Exhibitor(data))
        })
        setExhibitors(l);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.pcritere]);

  return (
  <FlatList
    data={listeExhibitors}
    keyExtractor={ (Exhibitor) => Exhibitor.idExhibitor.toString() }
    renderItem={({item}) => {
        return(
          <TouchableOpacity
              onPress={ () =>	props.navigation.navigate("Detail", {idExhibitor:item.idExhibitor})}>

                <View style={styles.item}> 
                  <Image 
                        source={ { 
                            uri : item.photoExhib
                            
                        }} 
                        style={styles.image}></Image>
                </View>
                <View style={styles.item}> 
                    <Text style={styles.title}>{item.pseudo}</Text>
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

