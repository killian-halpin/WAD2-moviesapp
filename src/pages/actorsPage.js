import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToActorsFavouritesIcon from '../components/cardIcons/addToActorsFavourites'

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const actorsFavourites = actors.filter(a => a.actorFavourite)
  localStorage.setItem('actorsFavourites', JSON.stringify(actorsFavourites))

  const title = "Popular Actors";

  return (
    <PageTemplate
      title={title}
      actors={actors}
      action={(actor) => {
        return <AddToActorsFavouritesIcon actor={actor} />
      }}
    />
);
};
export default ActorsPage;