import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import HelpModal from './components/HelpModal';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openHelpModal = () => {
    setModalIsVisible(true);
  };

  const closeHelpModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <StackNavigator openHelpModal={openHelpModal}/>
      </NavigationContainer>
      <HelpModal visible={modalIsVisible} close={closeHelpModal}/>
    </>
  );
}
