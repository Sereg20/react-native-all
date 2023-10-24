import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Meal = ({data}) => {
    const navigation = useNavigation();
    const route = useRoute();
    const color = route?.params?.color || '#351401';

    const onMealPress = () => {
        navigation.navigate('MealDetails', {
            id: data.id,
            color
        });
    };

    return (
        <View style={[styles.item, {backgroundColor: color}]}>
            <Pressable 
                android_ripple={styles.pressed} 
                style={pressed => pressed ? styles.pressed : null}
                onPress={onMealPress}>
                <Image style={styles.image} source={{ uri: data.imageUrl }}/>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.additional}>
                    <Text>Affortability - {data.affordability}</Text>
                    <Text>Duration - {data.duration}</Text>
                    <Text>Complexity - {data.complexity}</Text>
                    
                </View>
            </Pressable>
        </View>
    )
};

export default Meal;

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200
    },
    additional: {
        alignItems: 'flex-end',
        paddingRight: 15,
        paddingBottom: 10,
    },
    pressed: {
        color: '#2f567c', 
        borderless: true
    }
    
});