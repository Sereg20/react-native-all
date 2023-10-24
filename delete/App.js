import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailsScreen from './screens/DetalsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      
      backgroundColor: '#24180f'
    }}>
      <Stack.Screen name="Tabs" component={MyTabs} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor: '#24180f'
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          
        }
      }}/>
      <Tab.Screen name="SettingsScreen" component={SettingsScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </>
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
