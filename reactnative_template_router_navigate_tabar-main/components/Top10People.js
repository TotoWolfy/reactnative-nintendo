import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Top10Poeple(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url =
    "https://api.themoviedb.org/3/person/popular?api_key=" +
    apiKey +
    "&language=fr-FR&page="
  const fetchOptions = { method: "GET" };
  // -- state = liste des personnes
  const [listeTopPeople, setTopPeople] = useState([]);
  

  // -- requete initiala
  useEffect(() => {
    getDatas()
  }, []);

  // -- req AJAX = la 1ère et les suivantes en gérant le num de page
  function getDatas() {
    fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // --  ajout dans la liste des personnes
      let l = [...listeTopPeople]
      dataJSON.results.forEach((data)=>{
        let people = data
        l.push(people)
      })
      console.log(l)
      setTopPeople(l);  
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <Text>Liste personnes</Text>
  )}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
    },
    image: {
      width: 200,
      height: 200,
      margin: 5,
      backgroundColor: 'gray'
    },
    title: {
      fontSize: 20,
    },
  });

