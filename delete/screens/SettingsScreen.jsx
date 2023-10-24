import { View, Text, Button } from "react-native";

const SettingsScreen = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Details');
    };

    return (
        <View>
            <Text>Settings Screen</Text>
            <Button title='Press me' onPress={onPress}/>
        </View>
    );
};

export default SettingsScreen;