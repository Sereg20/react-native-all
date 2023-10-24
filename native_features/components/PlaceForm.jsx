import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import Input from "./UI/Input";
import { useState } from "react";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "./UI/Button";
import { useNavigation } from "@react-navigation/native";
import Place from "../models/place";

const PlaceForm = ({createPlace}) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState();
    const [imageUri, setImageUri] = useState();

    const onImageUriChange = (imageUri) => {
        setImageUri(imageUri);
    };

    const onSubmitPress = () => {
        const place = new Place(title, imageUri);
        createPlace(place);
    };

    return (
        <ScrollView style={styles.form}>
            <Input 
                title='Place Title:'
                value={title}
                onChange={(value) => setTitle(value)}/>
            <ImagePicker onImageUriChange={onImageUriChange}/>
            <View style={styles.actions}>
                <Button style={styles.submit} onPress={onSubmitPress}>Submit</Button>
            </View>
        </ScrollView>
    );
};

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        padding: 30
    },
    actions: {
        marginTop: 50,
    }
})