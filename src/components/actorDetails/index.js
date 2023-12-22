import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const root = {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const ActorDetails = ({ actor }) => {  

  return (
    <>
      <Typography variant="h5" component="h3">
        Information about {actor.name}:
      </Typography>

      <Typography variant="h6" component="p">
        Biography: 
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        Known For:
        {actor.known_for_department}
      </Paper>

      <Paper 
        component="ul" 
        sx={root}
      >
        Birthday: 
        {actor.birthday}
      </Paper>

      <Paper 
        component="ul" 
        sx={root}
      >
        Birthplace:
        {actor.place_of_birth}
      </Paper>
    </>
  );
};

export default  ActorDetails ;