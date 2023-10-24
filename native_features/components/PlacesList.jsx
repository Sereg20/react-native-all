import { FlatList, View, Text, StyleSheet } from "react-native";
import PlaceItem from './PlaceItem';

const PlacesList = ({items}) => {
    if (!items?.length) {
        return <View style={styles.fallbackContainer}><Text style={styles.fallbackMsg}>No Places Found!</Text></View>
    }

    return (
        <FlatList 
            style={styles.list}
            data={items} 
            keyExtractor={item => item.id} 
            renderItem={itemData => <PlaceItem data={itemData.item}/>}/>
    );
};

export default PlacesList;

const styles = StyleSheet.create({
    list: {
        margin: 20
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackMsg: {
        fontSize: 20,
        color: 'white'
    }
})