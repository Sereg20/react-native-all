import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Favourite = ({onPress, icon}) => {

    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <Ionicons name={icon} size={20} color='white'/>
        </Pressable>
        
    );
};

export default Favourite;

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    pressed: {
        opacity: 0.7
    }
});