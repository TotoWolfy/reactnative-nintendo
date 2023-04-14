import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, Switch } from 'react-native';
import EventsList from '../components/EventList';
import ExhibitorsList from '../components/ExhibitorList';


export default function ListView(props) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  if (!isEnabled){
  return (
    <View style={styles.container}>  
    <View style={styles.box}>
        <Text style={styles.text1}>Evenement</Text>
        <Text style={styles.text2}>Exposant</Text>
        </View>
    <Switch
        trackColor={{false: 'red', true: 'red'}}
        thumbColor={isEnabled ? 'red' : 'red'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    <EventsList {...props}/>
    </View>
    
  );
  }
  else{
    return (
        <View style={styles.container}>  
        <View style={styles.box}>
        <Text style={styles.text3}>Evenement</Text>
        <Text style={styles.text4}>Exposant</Text>
        </View>
        <Switch
            trackColor={{false: 'red', true: 'red'}}
            thumbColor={isEnabled ? 'red' : 'red'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        <ExhibitorsList {...props}/>
        </View>
        
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3:{
    color: 'white',
    borderWidth: 3,
    padding: 10,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    backgroundColor: 'red',
    fontWeight: 'bold',
    margin: -1
  },
  text4:{
    color: 'red',
    borderWidth: 3,
    padding: 10,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    backgroundColor: 'white',
    fontWeight: 'bold',
    margin: -1
  },
  text1:{
    color: 'red',
    borderWidth: 3,
    padding: 10,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    backgroundColor: 'white',
    fontWeight: 'bold',
    margin: -1
  },
  text2:{
    color: 'white',
    borderWidth: 3,
    padding: 10,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    backgroundColor: 'red',
    fontWeight: 'bold',
    margin: -1
  },
  box:{
    flexDirection: 'row',
    justifyContent: 'center'
  }
});