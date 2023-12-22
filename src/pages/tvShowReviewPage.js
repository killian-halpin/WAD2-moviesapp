import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTVShowPage";
import TVShowReview from "../components/tvShowReview";

const TVShowReviewPage = (props) => {
  let location = useLocation();
  const {tvShow, tvShowReview} = location.state;

  return (
    <PageTemplate tvShow={tvShow}>
      <TVShowReview tvShowReview={tvShowReview} />
    </PageTemplate>
  );
};

export default TVShowReviewPage;