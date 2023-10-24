import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants/style-constants";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({data}) => {
    const navigation = useNavigation();

    const onItemPress = () => {
        navigation.navigate('ManageExpense', {
            mode: 'edit',
            id: data.id,
            defaultValue: {
                title: data.title,
                amount: data.amount.toString(),
                date: data.date.toISOString().slice(0, 10)
            }
        });
    };

    return (
        <View style={styles.item}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed, styles.container] : styles.container}
                android_ripple={{ color: '#ccc', borderless: true }}
                onPress={onItemPress}>
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text>{data.date.toISOString().slice(0, 10)}</Text>
                </View>
                <Text style={styles.amount}>${data.amount.toFixed(2)}</Text>
            </Pressable>
        </View>
    );
};

export default ExpenseItem;

const styles = StyleSheet.create({
    item: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: GlobalStyles.colors.primary500,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#e4d9fd'
    },
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 18
    },
    pressed: {
        opacity: 0.7
    }
})