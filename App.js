import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './Screens/HomePage';
import GamesListPage from './Screens/GamesListPage';
import AddToListPage from './Screens/AddToListPage';
import RandomizePage from './Screens/RandomizePage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Games List" component={GamesListPage} />
        <Stack.Screen name="Add To List" component={AddToListPage} />
        <Stack.Screen name="Randomize Page" component={RandomizePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
