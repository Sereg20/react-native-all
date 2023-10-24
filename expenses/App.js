import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/style-constants';
import ExpensesProvider from './store/ExpensesProvider';

import IconButton from './components/UI/IconButton';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import AllExpenses from './screens/AllExpensesScreen';
import RecentExpenses from './screens/RecentExpensesScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Tab = () => {

  const onAddPress = (navigation) => {
    navigation.navigate('ManageExpense', {
      mode: 'add',
      defaultValue: {
        title: '',
        amount: '',
        date: new Date().toISOString().slice(0, 10)
      }
    });
  };

  return <Tabs.Navigator screenOptions={({ navigation }) => ({
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary500,
    },
    headerStyle: {
      backgroundColor: GlobalStyles.colors.primary500
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({tintColor}) => <IconButton icon='add' color={tintColor} size={28} onPress={() => { onAddPress(navigation) }}/>
  })}>
    <Tabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
      tabBarLabel: 'Recent',
      headerTitle: 'Recent Expenses',
      tabBarIcon: ({color, size}) => <Ionicons name='time' color={color} size={size}/>
    }}/>
    <Tabs.Screen name='AllExpenses' component={AllExpenses} options={{
      tabBarLabel: 'All',
      headerTitle: 'All Expenses',
      tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size}/>
    }}/>
  </Tabs.Navigator>
};

export default function App() {
  return (
    <NavigationContainer>
      <ExpensesProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500 
          }
        }}>
          <Stack.Screen name='Tab' component={Tab} options={{
            headerShown: false
          }}/>
          <Stack.Screen name='ManageExpense' component={ManageExpenseScreen} />
        </Stack.Navigator>
      </ExpensesProvider>
    </NavigationContainer>
  );
}
