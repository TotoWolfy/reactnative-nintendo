import { StyleSheet, Text, View, Image } from 'react-native';
import DetailEvent from '../components/DetailEvent';
import DetailExhibitor from '../components/DetailExhibitor';

export default function DetailView(props) {
  const paramIdEvent  = props.route.params.idEvent;
  const paramIdExhibitor = props.route.params.idExhibitor
  console.log(paramIdEvent, paramIdExhibitor)
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});