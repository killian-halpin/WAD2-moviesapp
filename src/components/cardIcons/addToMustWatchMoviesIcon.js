import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToMustWatchMoviesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatchMovies = (e) => {
    e.preventDefault();
    context.addToMustWatchMovies(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToMustWatchMovies}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchMoviesIcon;