import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
      marginLeft: 40,
      marginTop: 50,
      marginBottom: 50,
      marginRight: 10,
      textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
    minHeight: 20,
    maxHeight: 320,
    maxWidth: 260,
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
              image={props.cardImg}
              title={props.cardImgTitle}
              style={{maxWidth: 260}}
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
            <Button href={props.DemoBtn}> Demo </Button> 
            <Button href={props.CodeBtn}> Code </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}