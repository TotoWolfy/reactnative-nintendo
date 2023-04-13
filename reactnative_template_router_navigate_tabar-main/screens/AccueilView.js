import { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Button } from 'react-native';

export default function AccueilView(props) {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>  
      {/* le logo */}
      <Image
          style={styles.image}
          source={require('../assets/themoviedb.png')}
        />
      {/* la zone de saisie du critere */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="citere de recherche"
        />
        {/* bouton pour passer à la vue "Films" en lui donnont le critere saisi */}
        <Button 
          color="#24e082"
	        onPress={ () =>	props.navigation.navigate("Films",{"critere":text})}  title="Rechercher un film">
        </Button>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    height: 200,
    width:200
  },
});