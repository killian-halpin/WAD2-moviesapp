import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteTVShowReviewIcon = ({ tvShow }) => {
  return (
    <Link
      to={'/reviews/tvform'}
      state={{
          tvShowId: tvShow.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTVShowReviewIcon;