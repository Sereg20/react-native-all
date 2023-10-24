import { StyleSheet } from 'react-native';
import { View, Text } from "react-native";
import Colors from '../constants/colors';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 24
    }
});