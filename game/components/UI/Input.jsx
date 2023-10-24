import { TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Input = ({value, onChange, disabled}) => {
    const inputStyle = disabled ? [styles.input, styles.disabled] : styles.input;
    return (
        <TextInput 
            value={value} 
            onChangeText={onChange} 
            style={inputStyle}
            keyboardType='number-pad'
            maxLength={4} 
            cursorColor={Colors.primary100}
            textAlign='center'/>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.primary100,
        borderWidth: 2,
        color: 'white',
        fontSize: 26,
        padding: 10,
        letterSpacing: 8,
        width: 140,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    disabled: {
        borderColor: Colors.primary200,
    }
})