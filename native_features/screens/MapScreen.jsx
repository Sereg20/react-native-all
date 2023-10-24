import { View, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    return (
        <View style={styles.container}>
            <MapView initialRegion={region} style={styles.map}/>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    map: {
        width: '100%',
        height: '100%',
    },
})