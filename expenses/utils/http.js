import axios from "axios";

export const createExpense = (expense) => {
    axios.post('https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/expenses.json', expense);
};