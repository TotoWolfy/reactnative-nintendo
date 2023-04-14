
import { StyleSheet, View, Text } from 'react-native';
import ProductList from '../components/ProductList';

export default function BilletterieView(props) {
  return (
    <View style={styles.container}>
<Text>Billetterie</Text>
<ProductList navigation={props.navigation} />
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