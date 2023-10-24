import { useState } from "react";
import { TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { StyleSheet } from 'react-native';

import PrimaryBtn from "../components/PrimaryBtn";

const StartGameScreen = ({confirmNumber}) => {
    const [number, setNumber] = useState('');
    const { width, height } = useWindowDimensions();

    const onInputChange = (enteredText) => {
        setNumber(enteredText);
    };

    const onResetPress = () => {
        setNumber('');
    };

    const onConfirmPress = () => {
        const isValid = validateValue(+number);

        if (!isValid) {
            Alert.alert('Invalid', 'Value has to be a number between 1 and 99', [
                {text: 'OK', style: 'destructive', onPress: onResetPress},
            ])

            return;
        }

        confirmNumber(number);
    };

    const validateValue = (value) => {
        if (isNaN(value)) {
            return false;
        }
        if (value <= 0 || value > 99) {
            return false;
        }

        return true;
    };

    const style = {
        marginHorizontal: width > height ? 60 : 20
    }

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView behavior='padding' style={styles.screen}>
                <View style={[styles.inputContainer, style]}>
                    <TextInput 
                        style={styles.input} 
                        maxLength={2} 
                        keyboardType='number-pad' 
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={number}
                        onChangeText={onInputChange}/>
                    <View style={styles.actions}>
                        <View style={styles.button}>
                            <PrimaryBtn onPress={onResetPress}>Reset</PrimaryBtn>
                        </View>
                        <View style={styles.button}>
                            <PrimaryBtn onPress={onConfirmPress}>Confirm</PrimaryBtn>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },

    inputContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
        marginTop: 100,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#9e9b9b',
        elevation: 6,
        shadowColor: 'black'
    },
    input: {
        fontSize: 24,
        marginVertical: 20,
        width: 50,
        borderBottomWidth:1,
        borderColor: 'black',
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    actions: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        marginHorizontal: 10
    }
});

export default StartGameScreen