import React from "react";

const TVShowReview =  ({ tvShowReview }) => {
  return (
    <>
      <p>Review By: {tvShowReview.author} </p>
      <p>{tvShowReview.content} </p>
    </>
  );
};
export default TVShowReview