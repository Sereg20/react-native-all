import { Pressable, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const SubmitButton = ({onPress, disabled}) => {

    const buttonContainerStyles = disabled ? [styles.buttonContainer, styles.disabled] : styles.buttonContainer;
    return (
        <View style={buttonContainerStyles}>
            <Pressable style={styles.button} android_ripple={styles.ripple} onPress={onPress} disabled={disabled}>
                <Ionicons name='checkmark' color='black' size={30}/>
            </Pressable>
        </View>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    buttonContainer: {
        height: '100%',
        backgroundColor: Colors.primary100,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    disabled: {
        backgroundColor: Colors.primary200
    },
    button: {
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ripple: {
        color: '#ccc',
        borderless: true
    }
});