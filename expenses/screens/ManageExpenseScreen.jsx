import { View, StyleSheet } from "react-native";
import { useEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style-constants";
import { useContext } from "react";
import ExpensesContext from "../store/expenses-context";
import Form from "../components/Form";
import { createExpense } from "../utils/http";

const ManageExpenseScreen = ({ navigation, route }) => {
    const ctx = useContext(ExpensesContext);
    const mode = route.params?.mode;
    const defaultValue = route.params.defaultValue;
    const title = mode === 'add' ? 'Add Expense' : 'Manage Expense';

    useEffect(() => {
        navigation.setOptions({
            headerTitle: title
        })
    }, [navigation, title]);

    const saveExpense = (expenseData) => {
        if (mode === 'add') {
            const newExpense = {
                ...expenseData,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            };

            createExpense(newExpense);

            ctx.addExpense(newExpense);
        } else {
            const updatedExpense = {
                ...expenseData,
                id: route.params.id,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            };

            ctx.updateExpense(updatedExpense);
        }
        
        navigation.goBack();
    };
    
    const closeExpense = () => {
        navigation.goBack();
    };

    const onDeletePress = () => {
        const id = route.params.id;

        ctx.deleteExpense(id);
        navigation.goBack();
    };

    return (
        <View>
            <Form submit={saveExpense} close={closeExpense} defaultValue={defaultValue}/>
            { mode === 'edit' && 
                <View style={styles.deleteContainer}>
                    <IconButton icon='trash' size={46} color={GlobalStyles.colors.error500} onPress={onDeletePress}/>
                </View>
            }            
        </View>
    );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    
    deleteContainer: {
        alignItems: 'center',
        marginTop: 20
    },
})