import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";


const useStyles = makeStyles({
  wrapper: {
    padding: 10,
    
  },
  root: {
    minWidth: 340,
    maxWidth: 345,
  },
  media: {
    height: 340,
    objectFit: "cover",
  },
  title: {
   
  }
});

export default function MediaCard({ title, img, path }) {
  const classes = useStyles();
  const h = useHistory();

  return (
    <div className={classes.wrapper} onClick={() => h.push(path)}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
