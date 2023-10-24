import { useState } from 'react';

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';

import {StatusBar} from 'expo-status-bar'

export default function App() {
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameOverScreen, setGameOverScreen] = useState(false);
  const [steps, setSteps] = useState(0);

  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const confirmNumber = (number) => {
    setConfirmedNumber(number);
  };

  const gameOver = (steps) => {
    setGameOverScreen(true);
    setSteps(steps);
  };

  const startAgain = () => {
    setConfirmedNumber(undefined);
    setGameOverScreen(false);
  };

  let screen = <StartGameScreen confirmNumber={confirmNumber}/>

  if (gameOverScreen) {
    screen = <GameOverScreen onPress={startAgain} confirmedNumber={confirmedNumber} stepsNumber={steps}/>
  }

  if (confirmedNumber && !gameOverScreen) {
    screen = <GameScreen confirmedNumber={confirmedNumber} gameOver={gameOver}/>
  }

  return (
    <>
      <StatusBar />
      <LinearGradient colors={['yellow', '#4f6b6b']} style={styles.root}>
        <ImageBackground 
          source={require('./assets/ryunosuke-kikuno-UsocPeObI3Y-unsplash.jpg')} 
          style={styles.root}
          resizeMode='cover'
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.root}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5
  }
});
