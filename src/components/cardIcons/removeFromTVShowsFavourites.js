import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TVShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromTVShowsFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TVShowsContext);

  const handleRemoveFromTVShowsFavourites = (e) => {
    e.preventDefault();
    context.removeFromTVShowsFavourites(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from TV shows favorites"
      onClick={handleRemoveFromTVShowsFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTVShowsFavouritesIcon;