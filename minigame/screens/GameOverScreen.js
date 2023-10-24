import { View, Image, Text } from "react-native";
import { StyleSheet } from 'react-native';
import Colors from "../constants/colors";

import Title from "../components/Title";
import PrimaryBtn from "../components/PrimaryBtn";

const GameOverScreen = ({onPress, confirmedNumber, stepsNumber}) => {
    console.log(stepsNumber)
    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Game Over!</Title>
            <Text style={styles.summary}>
                <Text style={styles.highlighted}>{stepsNumber}</Text> Steps to guess number <Text style={styles.highlighted}>{confirmedNumber}</Text>
            </Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/joshua-earle--87JyMb9ZfU-unsplash.jpg')}/>
            </View>
            <View style={styles.actions}>
                <PrimaryBtn onPress={onPress}>New Game</PrimaryBtn>
            </View>
        </View>
    );
};

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center'
    },
    title: {
        marginTop: 40
    },
    summary: {
        marginTop: 20,
        fontFamily: 'open-sans',
        fontSize: 18
    },
    highlighted: {
        color: Colors.primary
    },
    imageContainer: {
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 175,
        width: 350,
        height: 350,
        marginTop: 20,
        marginBottom: 250,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    
});