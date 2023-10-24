import { View, Text, StyleSheet } from "react-native";

import ExpenseList from "./ExpensesList";
import Summary from "./Summary";

const ExpensesOutput = ({ expensesPeriod, expenses }) => {
    
    return (
        <View>
            <Summary expenses={expenses} period={expensesPeriod}/>
            <ExpenseList expenses={expenses}/>
        </View>
    );
};

export default ExpensesOutput;