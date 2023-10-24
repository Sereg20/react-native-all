import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";
import Colors from "../constants/Colors";
import IconButton from "../components/UI/IconButton";

const Stack = createNativeStackNavigator();

const StackNavigator = ({openHelpModal}) => {

  return (
    <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: Colors.primary100 },
        contentStyle: { backgroundColor: 'black' },
        headerTintColor: 'white'
    }}>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{
        title: 'Bulls and Cows',
        headerRight: ({tintColor}) => <IconButton icon='help' size={24} color={tintColor} onPress={openHelpModal}/>,
      }}/>
      <Stack.Screen name='GameScreen' component={GameScreen} options={{
        title: 'Bulls and Cows',
        headerRight: ({tintColor}) => <IconButton icon='help' size={24} color={tintColor} onPress={openHelpModal}/>,
      }}/>
      <Stack.Screen name='GameOverScreen' component={GameOverScreen} options={{
        title: 'Game Over'
      }}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;