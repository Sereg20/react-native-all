import { Text, Pressable, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const StartButton = ({children, onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} android_ripple={styles.ripple} onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default StartButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary100,
        borderRadius: 8,
        alignSelf: 'center',

    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 60,
        width: '100%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    ripple: {
        color: '#ccc',
        borderless: true
    }
})