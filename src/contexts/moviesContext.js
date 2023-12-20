import React, { useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [mustWatchMovies, setMustWatchMovies] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const addToMustWatchMovies = (movie) => {
    let newMustWatchList = [...mustWatchMovies];
    if (!mustWatchMovies.includes(movie.id)) {
      newMustWatchList.push(movie.id);
    }
    setMustWatchMovies(newMustWatchList);
  };

  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromMustWatchMovies = (movie) => {
    setMustWatchMovies( mustWatchMovies.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
 return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatchMovies,
        addToFavourites,
        addToMustWatchMovies,
        removeFromFavourites,
        removeFromMustWatchMovies,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;