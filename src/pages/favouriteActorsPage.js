import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromActorsFavourites from "../components/cardIcons/removeFromActorsFavourites";

const FavouriteMoviesPage = () => {
  const {actorsFavourites: actorIds } = useContext(ActorsContext);

  // Create an array of queries and run in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActors,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    return q.data
  });

  return (
    <PageTemplate
      title="Favourite Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
            <RemoveFromActorsFavourites actor={actor} />
          </>
        );
      }}
    />
  );
};

export default FavouriteMoviesPage;