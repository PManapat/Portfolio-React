import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "../modal";

const useStyles = makeStyles({
  root: {
      marginLeft: 50,
      marginTop: 50,
      marginBottom: 50,
      marginRight: 50,
      textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    minHeight: 100,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.cardImgAlt}
              height="140"
              image={props.cardImg}
              title={props.cardImgTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.cardTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {props.cardBody}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal modalTitle="Project One" modalBody="Project 1 body text"/>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}