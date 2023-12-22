import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTVShowsFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TVShowsContext);

  const handleAddToTVShowsFavourites = (e) => {
    e.preventDefault();
    context.addToTVShowsFavourites(tvShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTVShowsFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTVShowsFavouritesIcon;