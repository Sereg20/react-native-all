import { View, Text, Modal, StyleSheet, Image } from "react-native";
import StartButton from "./UI/StartButton";
import Colors from "../constants/Colors";

const HelpModal = ({visible, close}) => {
    return (
        <Modal visible={visible} >
            <View style={styles.root}>
                <Text style={styles.title}>HELP</Text>
                <View>
                    <Text style={styles.goal}>The Games's goal is to guess a random number. The number consists of 4 unique digits from 0 to 9</Text>
                </View>
                <View>
                    <View style={styles.digitTypesContainer}>
                        <Image source={require('../assets/green_bull.png')} style={styles.image}/>
                        <Text style={styles.digitTypes}>Bull means that a digit is in the right position of the number you are trying to guess</Text>
                    </View>
                    <View style={styles.digitTypesContainer}>
                        <Image source={require('../assets/yellow_cow.png')} style={styles.image}/>
                        <Text style={styles.digitTypes}>Cow means that the number you are trying to guess contains a digit</Text>
                    </View>
                </View>
                <StartButton onPress={close}>Got it</StartButton>
            </View>
        </Modal>
    );
};

export default HelpModal;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 30
    },
    goal: {
        fontSize: 16,
        marginBottom: 10
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    digitTypesContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10
    },
    digitTypes: {
        fontSize: 16,
        marginBottom: 30,
        
    }
});