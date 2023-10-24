import { View, Text, StyleSheet, FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({expenses}) => {
    return (
        <FlatList data={expenses} keyExtractor={item => item.id} renderItem={(itemData) => <ExpenseItem data={itemData.item} />}/>

    );
};

export default ExpensesList;