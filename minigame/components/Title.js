import { Text } from "react-native";
import { StyleSheet } from 'react-native';

import Colors from "../constants/colors"

const Title = ({children, style}) => {

    return (
        <Text style={[styles.title, style]}>{children}</Text>
    );
};

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontFamily: 'open-sans-bold',
        color: Colors.primary,
    }
});