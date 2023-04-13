import React, {useState} from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import EventsList from '../components/EventList';
import ExhibitorsList from '../components/ExhibitorList';


export default function ListView(props) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  if (!isEnabled){
  return (
    <View style={styles.container}>  
    <Text>Event / Exposant</Text>
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
        <Text>Event / Exposant</Text>
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

});