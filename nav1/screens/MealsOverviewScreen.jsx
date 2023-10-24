import { MEALS, CATEGORIES } from '../data/dummy-data';
import { View, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';


const MealsOverviewScreen = ({route, navigation }) => {
    const id = route.params.id;
    const displayedMeals = MEALS.filter(item => item.categoryIds.includes(id));
    
    useLayoutEffect(() => {
        const title = CATEGORIES.find(item => item.id === id).title;

        navigation.setOptions({
            title
        });
    }, [id, navigation]);

    return (
        <View style={styles.container}>
            <MealsList meals={displayedMeals} />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },
  list: {
    width: '94%',
    paddingVertical: 10,
  },
});