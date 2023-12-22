import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromMustWatchMoviesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromMustWatchMovies = (e) => {
    e.preventDefault();
    context.removeFromMustWatchMovies(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromMustWatchMovies}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchMoviesIcon;