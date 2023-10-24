import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Goal({goal, deleteGoal}) {

  function onGoalPress() {
    deleteGoal(goal.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable onPress={onGoalPress} android_ripple={{color: 'grey'}}>
        <Text style={styles.textItem}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'orchid'
  },
  textItem: {
    fontSize: 16,
    margin: 16,
  },
});
