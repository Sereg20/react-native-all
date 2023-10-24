import { View, Text, StyleSheet } from "react-native";

const DetailItem = ({children}) => {
    return (
        <View style={styles.item}>
            <Text>{children}</Text>
        </View>
    );
};

export default DetailItem;

const styles = StyleSheet.create({
    item: {
      widht: '100%',
      marginBottom: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#351401',
      padding: 8,
      backgroundColor: '#d6caca',
      alignItems: 'center'
    },
 
});