import { Text, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({icon, size, color, onPress}) => {
    return (
        <Pressable 
            style={({pressed}) => 
            pressed ? [styles.pressed, styles.button] : styles.button} 
            onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    }
})