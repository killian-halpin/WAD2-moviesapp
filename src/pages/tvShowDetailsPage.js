import React from "react";
import { useParams } from 'react-router-dom';
import TVShowDetails from "../components/tvShowDetails/";
import PageTemplate from "../components/templateTVShowPage";
import { getTVShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TVShowDetailsPage = () => {
    const { id } = useParams();
  
    const { data: tvShow, error, isLoading, isError } = useQuery(
      ["tvshow", { id: id }],
      getTVShow
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <TVShowDetails tvShow={tvShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting For TV Show Details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;