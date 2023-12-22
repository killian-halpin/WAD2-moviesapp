import React from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToTVShowsFavouritesIcon from '../components/cardIcons/addToTVShowsFavourites'

const TVShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvshows', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const tvShowsFavourites = tvShows.filter(t => t.tvShowsFavourite)
  localStorage.setItem('favourites', JSON.stringify(tvShowsFavourites))

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToTVShowsFavouritesIcon tvShow={tvShow} />
      }}
    />
);
};
export default TVShowsPage;