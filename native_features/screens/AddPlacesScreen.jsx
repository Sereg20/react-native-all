import { View } from "react-native";
import PlaceForm from "../components/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlacesScreen = ({navigation}) => {

    const createPlace = async (place) => {
        await insertPlace(place);
        navigation.navigate('AllPlacesScreen');
    };

    return (
        <View>
            <PlaceForm createPlace={createPlace}/>
            
        </View>
    );
};

export default AddPlacesScreen;