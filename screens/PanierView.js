
import { StyleSheet, View, Text } from 'react-native';
import PanierCompo from '../components/PanierCompo';

export default function PanierView(props) {
  console.log(props);
  return (
    <View style={styles.container}>
<Text>Panier</Text>
<PanierCompo navigation={props.navigation} removeCart={props.removeCart}/>

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