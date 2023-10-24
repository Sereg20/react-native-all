import Input from "./UI/Input";
import SubmitButton from "./UI/SubmitButton";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

const Form = ({submitNumber}) => {
    const [number, setNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    const onSumbitPress = () => {
        setNumber('');
        setIsValid(false);
        submitNumber(number);
    };

    const validateValue = (value) => {
        if (value.toString().length === 4 && !isNaN(value)) {
            return true;
        }
        return false;
    };

    const onInputChange = (value) => {
        setNumber(value);
        setIsValid(validateValue(value));
    };

    return (
        <View style={styles.form}>
            <Input value={number} onChange={onInputChange} disabled={!isValid}/>
            <SubmitButton onPress={onSumbitPress} disabled={!isValid}/>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
    }
})