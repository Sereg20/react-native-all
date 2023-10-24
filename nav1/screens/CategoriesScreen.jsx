import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import Category from '../components/Category';

const CategoriesScreen = () => {

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={(itemData) => 
                <Category 
                    title={itemData.item.title} 
                    color={itemData.item.color} 
                    id={itemData.item.id}/>
            }
            numColumns={2}/>
    );
};

export default CategoriesScreen;