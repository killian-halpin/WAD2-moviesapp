import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavourites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
  };
  return (
    <IconButton
      aria-label="Remove From Favorites"
      onClick={handleRemoveFromFavourites}
    >
      <DeleteIcon color="blue" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;