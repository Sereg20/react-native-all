import { useState, useEffect } from "react";

import { View, Text, Alert, ScrollView } from "react-native";
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryBtn from "../components/PrimaryBtn";
import Colors from "../constants/colors";

function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateNumber(min, max, exclude);
    }

    return randomNumber;
}

let max = 100;
let min = 1;
let steps = 0;

const GameScreen = ({confirmedNumber, gameOver}) => {
    const initial = generateNumber(1, 100, confirmedNumber);
    const [currentGuess, setCurrentGuess] = useState(initial);
    const [attemps, setAttemps] = useState([]);

    useEffect(() => {
        if (+currentGuess === +confirmedNumber) {
            gameOver(steps);
            max = 100; 
            min = 1;
            steps = 1;
        }
        setAttemps(prev => [...prev, currentGuess]);
    }, [currentGuess, confirmedNumber, gameOver]);

    const onIncreasePress = () => {
        if (currentGuess > confirmedNumber) {
            Alert.alert('Do not lie', 'your number is less than the number on the screen', [
                {text: 'OK'}
            ])
            return;
        }
        min = +currentGuess + 1;
        setCurrentGuess(generateNumber(min, max));
        steps++;
    };

    const onDecreasePress = () => {
        if (currentGuess < confirmedNumber) {
            Alert.alert('Do not lie', 'your number is more than the number on the screen', [
                {text: 'OK'}
            ])
            return;
        }
        max = +currentGuess - 1;
        setCurrentGuess(generateNumber(min, max));
        steps++;
    };

    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.text}>Higher or lower!?</Text>
                <View style={styles.actions}>
                    <View style={styles.button}>
                        <PrimaryBtn onPress={onDecreasePress}><Ionicons name='md-remove' size={18}/></PrimaryBtn>
                    </View>
                    <View style={styles.button}>
                        <PrimaryBtn onPress={onIncreasePress}><Ionicons name='md-add' size={18}/></PrimaryBtn>
                    </View>
                </View>
            </View>
            <View style={styles.list}>
                <ScrollView style={styles.lista}>
                        {attemps.map((attemp, index) => <View style={styles.attemp} key={index}>
                            <Text style={styles.attempText}>{index + 1}</Text>
                            <Text style={styles.attempText}>{attemp}</Text>
                        </View>)}
                </ScrollView>
            </View>
        </View>
    );
};

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center'
    },
    button: {
        marginHorizontal: 20,
        width: '30%'
    },
    title: {
        marginTop: 80
    },
    list: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
        
    },
    lista: {
        width: '96%',
    },
    attemp: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderColor: Colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    attempText: {
        fontSize: 16,
    }
});