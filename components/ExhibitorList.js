import { useState, useEffect } from "react";
import {FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Exhibitor from "../Exhibitor";
import { SectionList } from "react-native";

export default function ExhibitorsList(props) {

  const url ="https://cabrol.alwaysdata.net/api/saeExhibitorCategorie"
  const url2 = "https://cabrol.alwaysdata.net/api/saeExhibitorCatName/"
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
 
      categorie.data = await fetchExhibitor(categorie.catName)
      sectionComposant.push({title: categorie.catName, data: categorie.data})
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
function fetchExhibitor(cat){
  const maPromesse = new Promise((resolve, reject) => {
    fetch(url2 + cat, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        let listExhibitors = []
        dataJSON.forEach((data)=>{
          listExhibitors.push(new Exhibitor(data))
        })
        resolve(listExhibitors)

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
    console.log("ui"+JSON.stringify(data))
    setSection(data)
  } 
   majSection()
  }, []);
// for(categorie of listeExhibitors.catName){
   
  return (
    // <FlatList
    // data={listeExhibitors}
    // keyExtractor={ (Exhibitor) => Exhibitor.idExhibitor.toString() }
    // renderItem={({item}) => {
        // return(
        //   <TouchableOpacity
        //       onPress={ () =>	props.navigation.navigate("Detail", {idExhibitor:item.idExhibitor})}>

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
    },
    image: {
      width: 120,
      height: 120,
      margin: 5,
      backgroundColor: 'gray'
    },
    box: {
      flex:1,
      flexDirection: 'row',
      width: "100%"
    },
    title: {
      fontSize: 20,
      color: 'red',
      justifyContent: 'center',
    },
    sectionHeader:{
      fontSize: 20,
      backgroundColor: 'red',
      fontWeight: 'bold',
      color: 'white',
      marginTop: 30,
      borderRadius: 10,
      textAlign: 'center',
      paddingBottom: 10,
      paddingTop: 10,
      marginBottom: 10,
      width: "100%",
    }
  });

