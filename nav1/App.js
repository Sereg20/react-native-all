import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavouritesProvider from './store/context/FavouriteContextProvider';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <BottomTabs.Navigator
      sceneContainerStyle={{
        backgroundColor: '#24180f'
      }}
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#351401',
          paddingBottom: 2
        }
      }}>
      <BottomTabs.Screen name='Categories' component={CategoriesScreen} options={{
        tabBarIcon: ({color, size}) => <Ionicons name='pizza' size={size} color={color}/>
      }}/>
      <BottomTabs.Screen name='Favourites' component={FavouritesScreen} options={{
        tabBarIcon: ({color, size}) => <Ionicons name='star' size={size} color={color}/>
      }}/>
    </BottomTabs.Navigator>
  );
};


export default function App() {
  return (
    <FavouritesProvider>
    <NavigationContainer>
      
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401'},
          contentStyle: { backgroundColor: '#24180f' },
        }}>
          <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
          <Stack.Screen name='MealDetails' component={MealDetailsScreen}/>
        </Stack.Navigator>
      
    </NavigationContainer>
    </FavouritesProvider>
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
