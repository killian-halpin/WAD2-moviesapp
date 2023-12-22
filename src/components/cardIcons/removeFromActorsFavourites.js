import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActorsContext } from "../../contexts/actorsContext";

const RemoveFromActorsFavouritesIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleRemoveFromActorsFavourites = (e) => {
    e.preventDefault();
    context.removeFromActorsFavourites(actor);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromActorsFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};
export default RemoveFromActorsFavouritesIcon;