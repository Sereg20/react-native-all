import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ResultsList from "../components/ResultsList";
import StartButton from "../components/UI/StartButton";
import { LinearGradient } from "expo-linear-gradient";

const GameOverScreen = ({navigation, route}) => {
    const results = route.params.results;
    const attempts = results.length;

    const onStartAgainPress = () => {
        navigation.navigate('GameScreen', {
            initial: false
        });
    };

    return (
        <LinearGradient colors={['black', '#1E201E']} style={styles.root}>
            <ImageBackground 
                style={styles.root}
                source={require('../assets/background.jpg')} 
                resizeMode='cover' 
                imageStyle={styles.backgroundImage}>
                    <Text style={styles.title}>Congratulations!</Text>
                    <Text style={styles.conclusion}>You've spent {attempts} attempts to guess the Number {results[0].number}</Text>
                    <StartButton onPress={onStartAgainPress}>Try again</StartButton>
                    <ResultsList results={results} />
            </ImageBackground>
        </LinearGradient>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginTop: 25
    },
    conclusion: {
        color: 'white',
        fontSize: 22,
        marginVertical: 30,
        marginHorizontal: 20,
        textAlign: 'center'
    },
    backgroundImage: {
        opacity: 0.1
    }
});