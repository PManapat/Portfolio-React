import React from "react";
import { styled } from '@mui/material/styles';
import { Card, Button, Typography, CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import { Grid2 } from '@mui/material';

const useStyles = styled({
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
    backgroundColor: 'black',  // Set card background to black
    color: 'whitesmoke',       // Set text color to white
  },
  media: {
    maxWidth: 260,
  },
  content: {
    color: 'whitesmoke',       // Set content text to white
  },
  button: {
    color: 'whitesmoke',       // Set button text color to white
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Grid2 container>
      <Grid2 item>
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
      </Grid2>
    </Grid2>
  );
}