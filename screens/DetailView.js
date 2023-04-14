import { StyleSheet, Text, View, Image } from 'react-native';
import DetailEvent from '../components/DetailEvent';
import DetailExhibitor from '../components/DetailExhibitor';
import DetailProduct from '../components/DetailProduct';

export default function DetailView(props) {
  const paramIdEvent  = props.route.params.idEvent;
  const paramIdExhibitor = props.route.params.idExhibitor;
  const paramIdProduct = props.route.params.idProduct;
  console.log(paramIdEvent, paramIdExhibitor, paramIdProduct)
  if(paramIdEvent){

    return (
      <View style={styles.container}>
        <DetailEvent idEvent={paramIdEvent}></DetailEvent>
    </View>  
  );
}
if(paramIdExhibitor){
  return (
    <View style={styles.container}>
      <DetailExhibitor idExhibitor={paramIdExhibitor}></DetailExhibitor>
  </View>  
);
}

if(paramIdProduct){
  return (
    <View style={styles.container}>
      <DetailProduct idProduct={paramIdProduct} addToCart={props.addToCart}></DetailProduct>
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