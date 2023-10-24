import React from "react";

const ExpensesContext = React.createContext({
    expenses: [],
    addExpense: (expense) => {},
    deleteExpense: (id) => {},
    updateExpense: (expense) => {}
});

export default ExpensesContext;