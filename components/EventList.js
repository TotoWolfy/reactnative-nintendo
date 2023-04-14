import { useState, useEffect } from "react";
import {FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Event from "../Event";
import { SectionList } from "react-native";

export default function EventsList(props) {

  const url ="https://cabrol.alwaysdata.net/api/saeEventCategorie"
  const url2 = "https://cabrol.alwaysdata.net/api/saeEventCatName/"
  const fetchOptions = { method: "GET" };

  const [section, setSection] = useState([]);


  function  fetchCategorie(){
 
  const maPromesse = new Promise((resolve, reject) => {
    fetch(url, fetchOptions)
  .then((response) => {
    return response.json();
  })
  .then(async(dataJSON) => {
   // console.log(dataJSON);
    let sectionComposant = []
    for(let categorie of dataJSON){
 
      categorie.data = await fetchEvent(categorie.catNameEv)
      sectionComposant.push({title: categorie.catNameEv, data: categorie.data})
    }
    resolve(sectionComposant)
    }
  )
  .catch((error) => {
    console.log(error);
    reject(error)
  });
});
return maPromesse
}
function fetchEvent(cat){
  const maPromesse = new Promise((resolve, reject) => {
    fetch(url2 + cat, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        let listEvents = []
        dataJSON.forEach((data)=>{
          listEvents.push(new Event(data))
        })
        resolve(listEvents)

      })
      .catch((error) => {
        console.log(error);
        reject(error)
      });
});
return maPromesse
}
  useEffect(() => {
   const majSection = async ()=>{
    const data = await fetchCategorie()
    setSection(data)
  } 
   majSection()
  }, []);
// for(categorie of listeEvents.catName){
   
  return (
    // <FlatList
    // data={listeEvents}
    // keyExtractor={ (Event) => Event.idEvent.toString() }
    // renderItem={({item}) => {
        // return(
        //   <TouchableOpacity
        //       onPress={ () =>	props.navigation.navigate("Detail", {idEvent:item.idEvent})}>

        //         <View style={styles.item}> 
        //           <Image 
        //                 source={ { 
        //                     uri : item.photoEv
                            
        //                 }} 
        //                 style={styles.image}></Image>
        //         </View>
        //         <View style={styles.item}> 
        //             <Text style={styles.title}>{item.title}</Text>
        //         </View>
        //   </TouchableOpacity>
        // )
    //   }
    // }
    // />
    <View style={styles.container}>
    <SectionList
      sections={section}
      renderItem={({item}) => {
        return(
          <TouchableOpacity
          style={styles.box}
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
      renderSectionHeader={({section}) => ( 
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={item => item}
    />
  </View>
  );
    }

  // }
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
    
      flexWrap: 'wrap',
    },
    image: {
      width: 120,
      height: 120,
      margin: 5,
      backgroundColor: 'gray'
    },
    box: {
      flex:1,
      flexDirection: 'row'
    },
    title: {
      fontSize: 20,
      color: 'red',
      justifyContent: 'center',
    },
    sectionHeader:{
      fontSize: 45,
      backgroundColor: 'red',
      fontWeight: 'bold',
      color: 'white',
      marginTop: 30,
    }
  });

