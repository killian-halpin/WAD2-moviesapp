import React from "react";  
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getActorImages } from "../../api/tmdb-api";

const TemplateActorPage = ({ actor, children }) => {
  const {error, isLoading, isError } = useQuery(
    ["actorImages", { id: actor.id }],
    getActorImages
  );
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    
  
  return (
    <>
      <ActorHeader actor={actor} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
            alt= "Actor"
            />
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;