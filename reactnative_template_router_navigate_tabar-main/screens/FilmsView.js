import { StyleSheet, Text, View, Image } from 'react-native';
import FilmsList from '../components/FilmsList';

export default function FimsView(props) {
  // -- récupérer le critere saisi dans le formulaire et transmis par le router
  const critere  = props.route.params.critere;
  console.log(props.route.params)
  return (
    <View style={styles.container}>
        <Text>Liste des films</Text>
        {/* afficher le composant qui va faire la recherche et afficher les résultats */}
        <FilmsList pcritere={critere} {...props}></FilmsList>
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