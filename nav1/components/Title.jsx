import { Text, StyleSheet } from "react-native";

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      color: '#b89797'
    },
 
});