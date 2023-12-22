import React, { useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToActorsFavouritesIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleAddToActorsFavourites = (e) => {
    e.preventDefault();
    context.addToActorsFavourites(actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToActorsFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorsFavouritesIcon;