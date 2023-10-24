import ExpensesContext from "./expenses-context";
import { useState } from "react";

const ExpensesProvider = ({children}) => {
    
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses(prevState => [...prevState, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses(prevState => prevState.filter(item => item.id !== id));
    };

    const updateExpense = (newExpense) => {
        const id = newExpense.id;
        const index = expenses.findIndex(item => item.id === id);
        const updatedExpenses = [...expenses];
        updatedExpenses[index] = newExpense;
        setExpenses(updatedExpenses);
    };

    const value = {
        expenses: expenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
};

export default ExpensesProvider;