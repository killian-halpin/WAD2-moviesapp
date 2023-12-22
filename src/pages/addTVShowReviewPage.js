import React from "react";
import PageTemplate from "../components/templateTVShowPage";
import ReviewForm from "../components/tvShowReviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteTVShowReviewPage = (props) => {
  const location = useLocation()
  const { tvShowId } = location.state;
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvshow", { id: tvShowId }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate tvShow={tvShow}>
      <ReviewForm tvShow={tvShow} />
    </PageTemplate>
  );
};

export default WriteTVShowReviewPage;