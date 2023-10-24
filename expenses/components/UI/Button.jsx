import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/style-constants";

const Button = ({children, onPress, mode, style}) => {

    const buttonStyles = mode === 'flat' ? [styles.container, styles.flat] : styles.container;

    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={buttonStyles}>
                    <Text style={mode === 'flat' && styles.flatText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        alignItems: 'center',
        borderColor: GlobalStyles.colors.primary500,
        borderWidth: 1,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    flatText: {
        color: GlobalStyles.colors.primary500
    },
    pressed: {
        opacity: 0.7
    }
})