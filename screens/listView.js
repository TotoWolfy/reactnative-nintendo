
import { StyleSheet, View, Text } from 'react-native';
import EventsList from '../components/EventList';

export default function ListView(props) {
  return (
    <View style={styles.container}>  
    <Text>Liste</Text>
    <EventsList {...props}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});