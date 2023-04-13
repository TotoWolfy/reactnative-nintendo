
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import AccueilView from './screens/AccueilView'
import FilmsView from './screens/FilmsView'
import DetailView from './screens/DetailView'
import Top10View from './screens/Top10View'
import ListView from './screens/listView';

// --  navigation principale = TabBar
export default function App() {
  const Tab = createBottomTabNavigator();

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
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Map" 
        component={Map} 
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="List" 
        component={Liste} 
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// -- parie 1 = recherche de films
function Home() {
  const Stack = createNativeStackNavigator();
  return (      
  <Stack.Navigator>
    {/* la navigation doit se faire uniquement entre des View*/}
    <Stack.Screen name="Nintendo France Fest " component={AccueilView} />
    <Stack.Screen name="Liste" component={FilmsView} />
    <Stack.Screen name="Detail" component={DetailView} />
  </Stack.Navigator>
  )
}
// -- classement des acteurs (le top10...)
function Map() {
  const StackTop10 = createNativeStackNavigator();
  return (      
  <StackTop10.Navigator>
    <StackTop10.Screen name="Map" component={Top10View} />
  </StackTop10.Navigator>
  )
}
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