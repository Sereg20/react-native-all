import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import ExpensesContext from "../store/expenses-context";

const AllExpenses = () => {
    const ctx = useContext(ExpensesContext);
    return (
        <ExpensesOutput expensesPeriod='All' expenses={ctx.expenses}/>
    );
};

export default AllExpenses;