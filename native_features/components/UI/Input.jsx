import { View, TextInput, Text, StyleSheet } from "react-native";
import GlobalColors from "../../constants/style-constants";

const Input = ({title, value, onChange}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput value={value} onChangeText={onChange} style={styles.input}/>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    },
    input: {
        padding: 4,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: GlobalColors.primary100,
        marginTop: 6,
        marginBottom: 30,
        backgroundColor: GlobalColors.primary500
    }
})