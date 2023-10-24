import MealDetails from '../components/MealDetails';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import Favourite from '../components/Favourite';
import { useContext } from "react";
import FavouritesContext from '../store/context/favourite-context';

const MealDetailsScreen = ({ route, navigation }) => {
  const ctx = useContext(FavouritesContext);
  const id = route.params.id;
  const meal = MEALS.find(item => item.id === id);

  const isFavourite = ctx.ids.includes(id);

  const onFavouriteClick = () => {
    if (isFavourite) {
      ctx.deleteFavourite(id);
    } else {
      ctx.addFavourite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => { return (
        <Favourite onPress={onFavouriteClick} icon={isFavourite ? 'star' : 'star-outline'}/>
      )}
    });
  }, [navigation, meal, onFavouriteClick]);
   
    return (
        <MealDetails data={meal}/>
    );
};

export default MealDetailsScreen;
