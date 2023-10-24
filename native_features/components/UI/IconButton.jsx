import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

const IconButton = ({ icon, color, size, onPress}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={({pressed}) => pressed ? [styles.button, styles.pressed] : styles.button}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.7
    }
})