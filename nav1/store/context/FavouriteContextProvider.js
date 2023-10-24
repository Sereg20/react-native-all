import FavouritesContext from "./favourite-context";
import { useState } from "react";

const FavouritesProvider = ({children}) => {
    const [ids, setIds] = useState([]);

    const addFavourite = (id) => {
        setIds(prev => [...prev, id]);
    };

    const deleteFavourite = (id) => {
        setIds(prev => prev.filter(item => item !== id));
    };

    const value = {
        ids: ids,
        addFavourite: addFavourite,
        deleteFavourite: deleteFavourite
    }

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesProvider;
