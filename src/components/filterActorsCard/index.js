import React from "react";  
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { getActors } from "../../api/tmdb-api";
import img from '../../images/kh-actors.jpg';

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterActorsCard(props) {
    const { error, isLoading, isError } = useQuery("actors", getActors);

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <h1>{error.message}</h1>;
    }

    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); 
    };

    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };

  return (
    <Card 
      sx={{
        maxWidth: 340,
        minHeight: 700,
        backgroundColor: "rgb(5, 193, 255)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="medium" />
          Search for Actors.
        </Typography>
        <TextField
        sx={formControl}
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={props.titleFilter}
        onChange={handleTextChange}
        />
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Search"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}