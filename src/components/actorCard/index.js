import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { ActorsContext } from "../../contexts/actorsContext";

export default function ActorCard({ actor, action }) {
  const { actorsFavourites } = useContext(ActorsContext);

   if (actorsFavourites.find((id) => id === actor.id)) {
     actor.actorFavourite = true;
   } else {
     actor.actorFavourite = false
   }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.actorFavourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
          }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 450 }}
        image={
          actor.id
            ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {"Popularity: "} {actor.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(actor)}
    <Link to={`/actors/${actor.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}