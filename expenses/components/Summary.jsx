import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style-constants";

const Summary = ({period, expenses}) => {
    const total = expenses.reduce((sum, item) => sum += item.amount, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{period}</Text>
            <Text style={styles.sum}>${total.toFixed(2)}</Text>
        </View>
    );
};

export default Summary;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary500,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 40
    },
    period: {
        fontSize: 16,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})