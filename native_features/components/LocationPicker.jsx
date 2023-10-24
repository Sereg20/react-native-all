import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { useState } from "react";
import GlobalColors from "../constants/style-constants";
import { useForegroundPermissions, PermissionStatus, getCurrentPositionAsync } from 'expo-location';
import Button from "./UI/Button";
import { getMapPreview } from "../util/location";
import { useNavigation } from "@react-navigation/native";

const LocationPicker = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState();
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    const verifyPermissions = async () => {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Forbidden', 'You need to grand Location permissions');
            return false;
        }

        return true;
    };

    const onLocationPress = async () => {
        // const permission = await verifyPermissions();
        // if (!permission) {
        //     return;
        // }

        // const currentLocation = await getCurrentPositionAsync();

        setLocation({
            lat: 37.785834,
            lng: -122.406417
        });
    };

    const onMapPress = async () => {
        navigation.navigate('MapScreen');
    };

    return (
        <View>
            <View style={styles.locationContainer}>
                { location 
                    ? <Image source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${37.785834},${-122.406417}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${37.785834},${-122.406417}&key=AIzaSyCJyfMdNG4_jC0u_SgkpDI8Y_LaTf21IVc`}}/>
                    : <Text>No Location yet</Text>
                }
            </View>
            <View style={styles.actions}>
                <Button style={styles.button} icon='location' onPress={onLocationPress}>Locate</Button>
                <Button style={styles.button} icon='map' onPress={onMapPress}>Pick a Location</Button>
            </View>
            
        </View>
    );
};

export default LocationPicker;

const styles = StyleSheet.create({
    locationContainer: {
        width: '100%',
        height: 200,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: GlobalColors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '48%'

    }
});