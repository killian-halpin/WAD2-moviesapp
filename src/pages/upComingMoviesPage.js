import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchMoviesIcon from '../components/cardIcons/addToMustWatchMoviesIcon'

const UpcomingMoviesPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
    if (isLoading) {
      return <Spinner />
    }
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;

    const mustWatchMovies = movies.filter(m => m.mustWatchMovies)
    localStorage.setItem('mustWatchMovies', JSON.stringify(mustWatchMovies))

    return (
        <PageTemplate
          title="Upcoming Movies"
          movies={movies}
          action={(movie) => {
            return <AddToMustWatchMoviesIcon movie={movie} />
        }}
      />
  );
  };
  export default UpcomingMoviesPage;