import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import Goal from './components/Goal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modal, setModal] = useState(false);

  const addGoal = (goal) => {
    setGoalsList(prevState => [...prevState, {text: goal, id: Date.now().toString()}]);
    closeModal();
  }

  const deleteGoal = (id) => {
    setGoalsList(prevState => prevState.filter(item => item.id !== id));
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Button title='Add a new Objective' onPress={openModal} color='rgba(238,238,247,1)'/>
        <GoalInput 
          addGoal={addGoal} 
          visible={modal}
          closeModal={closeModal}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goalsList} 
          renderItem={itemData => {
            return (
              <Goal goal={itemData.item} deleteGoal={deleteGoal}/>
            )
          }}
          keyExtractor={item => {
            return item.id
          }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'rgba(219,231,240,1)',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    padding: 5
  },
  goalsContainer: {
    flex: 5,
  },
});
