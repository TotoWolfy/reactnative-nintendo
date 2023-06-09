
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import AccueilView from './screens/AccueilView'
import FilmsView from './screens/FilmsView'
import DetailView from './screens/DetailView'
import ListView from './screens/listView';
import BilletterieView from './screens/BilletterieView';
import PanierView from './screens/PanierView';
import PanierCompo from "./components/PanierCompo";
import MapsView from './screens/MapView';

// --  navigation principale = TabBar
export default function App() {
  const Tab = createBottomTabNavigator();
  const [panierCount, setPanierCount]= useState(0);

 

  function addToCart() {
      // const newProduct = Product.filter(product => product.idProduct === idProduct)[0];
    // if (newProduct) {
    //   setPanier([...panier, newProduct]);
    setPanierCount(nbproduct =>nbproduct + 1);
    //  }
  }
  

  function removeCart() {
    if (panierCount > 0) {
      setPanierCount(nbproduct => nbproduct - 1);
    }
  }
 

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          headerShown: false 
        })}
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Map" 
        component={Map} 
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="List" 
        component={Liste} 
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Billetterie" 
        component={Billetterie} 
        options={{
          tabBarLabel: 'Billetterie',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-euro" color={color} size={size} />
          ),
        }}
        />

<Tab.Screen 
  name="Panier" 
  component={Panier} 
  options={{
    tabBarLabel: 'Panier',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="cart-outline" color={color} size={size} />
    ),
    tabBarBadge: panierCount
  }}
/>

      </Tab.Navigator>
    </NavigationContainer>
  );




function Home() {
  const Stack = createNativeStackNavigator();
  return (      
  <Stack.Navigator>
    <Stack.Screen name="Nintendo France Fest " component={AccueilView} />
    <Stack.Screen name="Liste" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView} />
  </Stack.Navigator>
  )
}

// -- classement des acteurs (le Map...)
function Map() {
  const StackMap = createNativeStackNavigator();
  return (      
  <StackMap.Navigator>
    <StackMap.Screen name="Map" component={MapsView} />
    <StackMap.Screen name="Detail" component={DetailView} />
  </StackMap.Navigator>
  )
}

// -- The list with the events and the exhibitors
function Liste() {
  const StackList = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();
  return (      
  <StackList.Navigator>
    <StackList.Screen name="Liste" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView} />
  </StackList.Navigator>
  )
}

// -- The ticketing for buy amazing tickets
function Billetterie() {
  const StackBilletterie = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();
  
  return (      
  <StackBilletterie.Navigator>
    <StackBilletterie.Screen name="Billetterie"> 
    {(props)=> <BilletterieView {...props}addToCart={addToCart}></BilletterieView>}
    
    </StackBilletterie.Screen>
    <Stack.Screen name="Detail" component={DetailView} />
  </StackBilletterie.Navigator>

  
  )
}

// -- The cart
function Panier(){
  const StackPanier = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();
  return (      
  <StackPanier.Navigator>
    <StackPanier.Screen name="Panier">
    {(props)=> <PanierView {...props}removeCart={removeCart}></PanierView>}
    </StackPanier.Screen>
  </StackPanier.Navigator>
  )
}
}