import { View, Image, StyleSheet } from "react-native";
import StartButton from "../components/UI/StartButton";

const WelcomeScreen = ({navigation}) => {

    const onStartPress = () => {
        navigation.navigate('GameScreen', {
            initial: 'Initial'
        });
    };
    return (
        <View style={styles.root}>
            <Image source={require('../assets/cow.jpg')} style={styles.image} resizeMode='cover'/>
            <StartButton onPress={onStartPress}>Start</StartButton>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 100,
        paddingTop: 50
    },
    image: {
        height: 350,
        width: 350,
        borderRadius: 175,
    }
})