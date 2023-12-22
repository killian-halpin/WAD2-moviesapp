import React, { useContext } from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { TVShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTVShowsFavourites from "../components/cardIcons/removeFromTVShowsFavourites";
import WriteTVShowReview from "../components/cardIcons/writeTVShowReview";

const FavouriteTVShowsPage = () => {
  const {tvShowsFavourites: tvShowIds } = useContext(TVShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteTVShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTVShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVShowQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTVShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Favourite TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromTVShowsFavourites tvShow={tvShow} />
            <WriteTVShowReview tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTVShowsPage;