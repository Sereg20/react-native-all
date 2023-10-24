import React from "react";

const FavouritesContext = React.createContext({
    ids: [],
    addFavourite: (id) => {},
    deleteFavourite: (id) => {},
});

export default FavouritesContext;