import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Category = ({title, color, id}) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('MealsOverview', {
            id,
            color
        });
    };

    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable 
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.pressed : null
                ]} 
                android_ripple={styles.pressed} 
                onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};

export default Category;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 4
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    pressed: {
        color: '#ccc', 
        borderless: true
    }
    
});