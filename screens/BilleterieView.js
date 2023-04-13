
import { StyleSheet, View, Text } from 'react-native';


export default function BilleterieView(props) {
  return (
    <View style={styles.container}>  
    <Text>Billeterie</Text>
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