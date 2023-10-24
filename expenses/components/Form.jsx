import { View, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style-constants";
import Button from "../components/UI/Button";
import { useState } from "react";

const Form = ({submit, close, defaultValue }) => {
    const [expenseData, setExpenseData] = useState(defaultValue);

    const onInputChange = (identifier, value) => {
        setExpenseData(prevState => ({
            ...prevState,
            [identifier]: value
        }));
    };

    const onSavePress = () => {
        submit(expenseData);
    };

    const onClosePress = () => {
        close();
    };

    return (
        <View style={styles.form}>
            <View style={styles.container}>
                <TextInput placeholder='Amount' style={[styles.input, styles.inputAmount]} value={expenseData.amount} onChangeText={value => onInputChange('amount', value)}/>
                <TextInput placeholder='Date' style={[styles.input, styles.inputDate]} value={expenseData.date} onChangeText={value => onInputChange('date', value)}/>
            </View>
            <TextInput placeholder='Title' style={[styles.input, styles.inputTitle]} value={expenseData.title} onChangeText={value => onInputChange('title', value)}/>
            <View style={styles.actions}>
                <Button style={styles.action} onPress={onSavePress} mode='flat'>Save</Button>
                <Button style={styles.action} onPress={onClosePress}>Close</Button>
            </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'grey',
        margin: 20,
        padding: 14,
        borderRadius: 10
    },
    container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        borderColor: GlobalStyles.colors.primary500,
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        backgroundColor: GlobalStyles.colors.primary200
    },
    inputTitle: {
    },
    inputAmount: {
        marginRight: 30,
        flex: 1
    },
    inputDate: {
        flex: 1
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        paddingBottom: 20,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.primary500
    },
    action: {
        marginHorizontal: 10,
        minWidth: 140
    }
})