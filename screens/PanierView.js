
import { StyleSheet, View, Text } from 'react-native';
// import ProductList from '../components/ProductList';

export default function PanierView(props) {
  return (
    <View style={styles.container}>
<Text>Panier</Text>
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