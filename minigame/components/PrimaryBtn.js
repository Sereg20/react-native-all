import { Pressable, View, Text } from "react-native";
import { StyleSheet } from 'react-native';

import Colors from "../constants/colors";

const PrimaryBtn = ({children, onPress}) => {

    return (
        <View style={styles.btn}>
            <Pressable
                style={styles.pressableContainer}
                onPress={onPress} 
                android_ripple={{color: 'black'}}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
    },
    pressableContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center'
    },
    pressed: {
        color: 'black'
    },
    text: {
        fontFamily: 'open-sans'
    }
});