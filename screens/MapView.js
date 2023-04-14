import MapView, {Marker, Overlay} from 'react-native-maps'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import React, { Component } from 'react';
import WifiIcon from '../assets/wifi.png'
import WCIcon from '../assets/toilets.png'
import SnackIcon from '../assets/snack_bar.png'
import BlueIcon from '../assets/blue-pushpin.png'
import { Button } from 'react-native-web';

export default function MapsView(props){
    
    const [position, setPosition] = useState( {
        latitude: 43.621350,
        longitude: 2.261258,
    })
    const marqueurs = [
        { // borne WIFI MMI TD rouge
        position : { latitude:43.620680, longitude:2.261520 },
        icon: "https://cdn.discordapp.com/attachments/1048037393728548915/1096414097882480711/wrHeQf8FtK7FDcAPrZAAAAAASUVORK5CYII.png",
        label: "Borne WIFI",
        link : () => props.navigation.navigate("Detail", {idExhibitor:6})
        },
        { // bornes WIFI MMI central
        position: { latitude:43.620460, longitude:2.261850},
        icon: "https://cdn.discordapp.com/attachments/1048037393728548915/1096414097882480711/wrHeQf8FtK7FDcAPrZAAAAAASUVORK5CYII.png",
                label: "Borne WIFI",
        link : () => props.navigation.navigate("Detail", {idExhibitor:5}),
        },
        { // toilettes MMI TD rouge
        position: { latitude:43.620780, longitude:2.261480},
        icon: WCIcon,
        },
        { // toilettes MMI central
        position: { latitude:43.620580, longitude:2.261680},
        icon: WCIcon,
        },
        { // toilettes MMI fond couloir
        position: { latitude:43.620400, longitude:2.261940},
        icon: WCIcon,
        },
        { // salle etudiants MMI
        position: { latitude:43.620360, longitude:2.262100},
        link : () => props.navigation.navigate("Detail", {idEvent:2}),
        icon: "https://cdn.discordapp.com/attachments/1048037393728548915/1096414138831491142/9k.png",
            },
        { // grand amphi
        position: { latitude:43.620840, longitude:2.261310},
        label: "Grand amphi",
        icon: "https://cdn.discordapp.com/attachments/1048037393728548915/1096414138831491142/9k.png",
                link : () => props.navigation.navigate("Detail", {idExhibitor:1})
        },
        { // petit amphi
        position: { latitude:43.620740, longitude:2.261310},
        label: "Petit amphi",
        icon: "https://cdn.discordapp.com/attachments/1048037393728548915/1096414097882480711/wrHeQf8FtK7FDcAPrZAAAAAASUVORK5CYII.png",
                link : () => props.navigation.navigate("Detail", {idEvent:1})
        },
        ] 
    return(

        <View style={styles.container}>
 <MapView
 style={styles.mapStyle}

 initialRegion={region}
 >
    {
        marqueurs && marqueurs.length ? marqueurs.map((item) => {
            return (
               <Marker 
                   coordinate={item.position}
                   image={item.icon}
                   title={item.label}
                   description={item.description}
                   onPress={item.link}
              />
            )
        }) : null
    }
 </MapView>
 <Overlay
      bounds = {boundsIUT}
      image={require('../assets/IUTCastresGrisClair.png')}
     />
 </View>
     )
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
       mapStyle: {
           width: Dimensions.get('window').width,
           height: Dimensions.get('window').height,
           flex: 1
           },
           
     });
     const region = {
        latitude: 43.621350,
        longitude: 2.261258,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
        }
        const boundsIUT = [[43.620220,2.260360],[ 43.622050,2.262510] ]
        