import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [tvShowsFavourites, setTVShowsFavourites] = useState( [] )
  const [myTVShowReviews, setMyTVShowReviews] = useState( {} ) 

  const addToTVShowsFavourites = (tvShow) => {
    let newTVShowsFavourites = [...tvShowsFavourites];
    if (!tvShowsFavourites.includes(tvShow.id)) {
      newTVShowsFavourites.push(tvShow.id);
    }
    setTVShowsFavourites(newTVShowsFavourites);
  };

  const removeFromTVShowsFavourites = (tvShow) => {
    setTVShowsFavourites( tvShowsFavourites.filter(
      (tId) => tId !== tvShow.id
    ) )
  };

  const addTVShowReview = (tvShow, tvShowReview) => {
    setMyTVShowReviews( {...myTVShowReviews, [tvShow.id]: tvShowReview } )
  };

 return (
    <TVShowsContext.Provider
      value={{
        tvShowsFavourites,
        addToTVShowsFavourites,
        removeFromTVShowsFavourites,
        addTVShowReview,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;