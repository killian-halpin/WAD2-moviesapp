import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
//Main Pages
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorsPage from "./pages/actorsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import UpComingMoviesPage from "./pages/upComingMoviesPage";
//Review Pages
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
//Other
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
//Context Pages
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <ActorsContextProvider>
        <MoviesContextProvider>
            <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpComingMoviesPage />} />
        <Route exact path="/actors/favourites" element={<FavouriteActorsPage />} />
        <Route exact path="/movies/mustwatch" element={<MustWatchMoviesPage />} />            
        <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/actors/:id" element={<ActorPage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/actors" element={<ActorsPage />} />
                    
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
            </MoviesContextProvider>
        </ActorsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);