import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Title from "./Title";
import DetailItem from './DetailItem';

const MealDetails = ({data}) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: data.imageUrl }}/>
                <Text style={styles.title}>{data.title}</Text>
                
                <Title>Ingredients</Title>
                {data.ingredients.map(item => <DetailItem key={item}>{item}</DetailItem>)}
            </View>
        </ScrollView>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 350,
    marginVertical: 20
  }

});