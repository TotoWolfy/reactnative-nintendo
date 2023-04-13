
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import AccueilView from './screens/AccueilView'
import FilmsView from './screens/FilmsView'
import DetailView from './screens/DetailView'
import Top10View from './screens/Top10View'

// --  navigation principale = TabBar
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false 
        })}
      >
        <Tab.Screen 
        name="Search films" 
        component={FilmsScreen} 
        options={{
          tabBarLabel: 'Films',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Top10 acteurs" 
        component={Top10Screen} 
        options={{
          tabBarLabel: 'Top 10',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// -- parie 1 = recherche de films
function FilmsScreen() {
  const Stack = createNativeStackNavigator();
  return (      
  <Stack.Navigator>
    {/* la navigation doit se faire uniquement entre des View*/}
    <Stack.Screen name="Accueil" component={AccueilView} />
    <Stack.Screen name="Films" component={FilmsView} />
    <Stack.Screen name="Detail" component={DetailView} />
  </Stack.Navigator>
  )
}
// -- classement des acteurs (le top10...)
function Top10Screen() {
  const StackTop10 = createNativeStackNavigator();
  return (      
  <StackTop10.Navigator>
    <StackTop10.Screen name="Top" component={Top10View} />
  </StackTop10.Navigator>
  )
}