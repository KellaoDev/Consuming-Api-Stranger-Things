import Index from './source/screens/Index';
import SearchScreen from './source/screens/SearchScreen';
import CardScreen from './source/screens/CardScreen';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: '', headerStyle : { backgroundColor: '#C1305B'}}}/>
        <Stack.Screen name="CardScreen" component={CardScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}


