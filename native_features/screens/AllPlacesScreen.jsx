import PlacesList from "../components/PlacesList";
import { fetchPlaces } from "../util/database";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const AllPlacesScreen = () => {
    const [places, setPlaces] = useState();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            fetchPlaces().then((places) => {
                setPlaces(places.rows._array);
            });
        }
    }, [isFocused]);

    return (
        <PlacesList items={places}/>
    );
};

export default AllPlacesScreen;