import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/AllPlacesScreen';
import AddPlacesScreen from './screens/AddPlacesScreen';
import IconButton from './components/UI/IconButton';
import GlobalColors from './constants/style-constants';
import MapScreen from './screens/MapScreen';
import AppLoading from 'expo-app-loading';

import { init } from './util/database';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    init().then(() => {
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: GlobalColors.primary100, tintColor: 'white' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: 'black'}
        }}>
          <Stack.Screen name='AllPlacesScreen' component={AllPlacesScreen} options={({ navigation }) => ({
            title: 'All Places',
            headerRight: ({tintColor}) => <IconButton icon='add' size={24} color={tintColor} onPress={() => navigation.navigate('AddPlacesScreen')}/>
          })}/>
          <Stack.Screen name='AddPlacesScreen' component={AddPlacesScreen} options={{
            title: 'Add a New Place'
          }}/>
          <Stack.Screen name='MapScreen' component={MapScreen} options={{
            title: 'Map'
          }}/>
        </Stack.Navigator>
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
