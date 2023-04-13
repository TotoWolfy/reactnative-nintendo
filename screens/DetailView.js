import { StyleSheet, Text, View, Image } from 'react-native';
import DetailFilm from '../components/DetailEvent';

export default function DetailView(props) {
  const paramIdEvent  = props.route.params.idEvent;
  return (
    <View style={styles.container}>
        <DetailFilm idFilm={paramIdEvent}></DetailFilm>
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