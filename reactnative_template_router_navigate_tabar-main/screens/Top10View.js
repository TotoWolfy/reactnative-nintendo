
import { StyleSheet, View, Text } from 'react-native';
import Top10Poeple from '../components/Top10People';

export default function Top10View(props) {
  return (
    <View style={styles.container}>  
    <Text>Top10</Text>
    <Top10Poeple></Top10Poeple>
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