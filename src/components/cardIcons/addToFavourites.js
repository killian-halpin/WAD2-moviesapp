import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };

  return (
    <IconButton aria-label="Add To Favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="red" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;