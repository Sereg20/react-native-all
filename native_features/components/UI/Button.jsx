import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import GlobalColors from "../../constants/style-constants";

const Button = ({icon, children, onPress, style}) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.button, styles.pressed, style] : [styles.button, style]}>
            <Ionicons name={icon} color={GlobalColors.primary500} size={20}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: GlobalColors.primary500,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6
    },
    text: {
        color: GlobalColors.primary500,
        fontSize: 18,
        marginLeft: 10
    },
    pressed: {
        backgroundColor: GlobalColors.primary500,
        opacity: 0.5
    }
});