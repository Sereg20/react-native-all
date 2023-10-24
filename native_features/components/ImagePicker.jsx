import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import GlobalColors from "../constants/style-constants";
import Button from "./UI/Button";

const ImagePicker = ({onImageUriChange}) => {
    const [imageUri, setImageUri] = useState();
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    const verifyPermissions = async () => {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();

            return response.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Forbidden', 'You need to grand Camera permissions');
            return false;
        }

        return true;
    };

    const onTakeImagePress = async () => {
        const permission = await verifyPermissions();

        if (!permission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });

        setImageUri(image.uri);
        onImageUriChange(image.uri);
    };

    return (
        <View>
            <View style={styles.imageContainer}>
                { imageUri 
                    ? <Image source={{uri: imageUri}} style={styles.image}/>
                    : <Text>No Photo yet</Text>
                }
            </View>
            <Button icon='camera' onPress={onTakeImagePress}>Take a Photo</Button>
        </View>
    );
};

export default ImagePicker;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 200,
        marginVertical: 10,
        borderRadius: 4,
        backgroundColor: GlobalColors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    }
});