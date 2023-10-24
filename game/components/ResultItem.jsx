import { View, StyleSheet, Text, Image } from "react-native";
import Colors from '../constants/Colors';

const ResultItem = ({result}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{result.number}</Text>
            <View style={styles.details}>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailNumber}>{result.bulls}</Text>
                    <Image style={styles.image} source={require('../assets/green_bull.png')}/>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailNumber}>{result.cows}</Text>
                    <Image style={styles.image} source={require('../assets/yellow_cow.png')}/>
                </View>                
            </View>
        </View>
    );
};

export default ResultItem;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        backgroundColor: Colors.surfaces,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        marginBottom: 20
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    details: {
        flexDirection: 'row'
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 40
    },
    detailNumber: {
        color: 'white',
        fontSize: 20
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 10
    }
})