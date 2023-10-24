import { View, Text, StyleSheet, Pressable, Image } from "react-native";

const PlaceItem = ({data, onSelect}) => {
    return (
        <Pressable style={styles.item} onPress={onSelect}>
            <Image style={styles.image} source={{ uri: data.imageUri }}/>
            <View style={styles.data}>
                <Text style={styles.title}>Title:</Text>
                <Text style={styles.text}>{data.title}</Text>
            </View>
                
        </Pressable>
    );
};

export default PlaceItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 4
    },
    image: {
        flex: 1,
        height: 100,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 2,
        marginRight: 20,
    },
    title: {
        marginRight: 5,
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        fontSize: 20
    }
});