import { FlatList, StyleSheet } from "react-native";
import Meal from "./Meal";

const MealsList = ({meals}) => {
    return (
        <FlatList 
            style={styles.list}
            data={meals}
            keyExtractor={item => item.id}
            renderItem={itemData => <Meal data={itemData.item}/>}/>
    );
};

export default MealsList;

const styles = StyleSheet.create({
    list: {
      width: '94%',
      paddingVertical: 10,
    },
  });