import { View, StyleSheet, Alert } from "react-native";
import Form from "../components/Form";
import ResultsList from "../components/ResultsList";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import { calculateBulls } from "../utils/calculateResult";
import { calculateCows } from "../utils/calculateResult";
import { generateNumber } from "../utils/generateNumber";

const GameScreen = ({navigation, route}) => {
    const [number, setNumber] = useState();
    const [results, setResults] = useState([]);
    const isFocused = useIsFocused();
    const isInitial = route?.params.initial === 'Initial';

    useEffect(() => {
        if (isFocused) {
            const number = generateNumber();
            setNumber(number);
            setResults([]);

            if (isInitial) {
                Alert.alert('Try to guess the Number',
                    `Number contains 4 unique digits from 0 to 9`);
            }
        }
    }, [isFocused]);

    useEffect(() => {
        if (results[0]?.bulls === 4) {
            navigation.navigate('GameOverScreen', {
                results: results
            });
        }
    }, [results, navigation]);

    const submitNumber = (guessedNumber) => {
        const bulls = calculateBulls(number, guessedNumber);
        const cows = calculateCows(number, guessedNumber) - bulls;
        const result = {
            number: guessedNumber,
            bulls,
            cows   
        };
        setResults(prevState => [result, ...prevState]);
    }

    return (
        <View style={styles.root}>
            <Form submitNumber={submitNumber}/>
            <ResultsList results={results}/>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    }
})