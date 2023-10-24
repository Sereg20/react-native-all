import { MEALS } from '../data/dummy-data';
import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import FavouritesContext from '../store/context/favourite-context';
import MealsList from '../components/MealsList';

const FavouritesScreen = () => {
    const ctx = useContext(FavouritesContext);
    const favouriteMeals = MEALS.filter(item => ctx.ids.includes(item.id));

    return (
        <View style={styles.container}>
            <MealsList meals={favouriteMeals}/>
        </View>
    );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    }
});  
