import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import ExpensesContext from "../store/expenses-context";

const RecentExpenses = () => {
    const ctx = useContext(ExpensesContext);
    const filteredExpenses = ctx.expenses.filter(item => {
        const today = new Date();
        return today - item.date < 604800000
    })
    return (
        <ExpensesOutput expensesPeriod='Last 7 Days' expenses={filteredExpenses}/>
    );
};

export default RecentExpenses;