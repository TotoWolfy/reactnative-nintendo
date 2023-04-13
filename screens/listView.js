
import { StyleSheet, View, Text } from 'react-native';


export default function ListView(props) {
  return (
    <View style={styles.container}>  
    <Text>Liste</Text>

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