import { View, StyleSheet, ScrollView, Text } from "react-native";

import ResultItem from "./ResultItem";

const ResultsList = ({results}) => {

    if (results.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>Start Guessing!</Text>
            </View>
        );
    }

    return (
        <View style={styles.list}>
            <ScrollView>
                {results.map((result, index) => <ResultItem result={result} key={index}/>)}
            </ScrollView>
        </View>
    );
};

export default ResultsList;

const styles = StyleSheet.create({
    list: {
        width: '90%',
        marginTop: 50,
        paddingBottom: 40
    },
    fallbackContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fallbackText: {
        color: 'white',
        fontSize: 24
    }
})