import React from "react";
import { styled } from '@mui/material/styles';
import { Card, Button, Typography, CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import { Grid2 } from '@mui/material';

const useStyles = styled({
  cardActions: {
    justifyContent: 'center',
    marginBottom: '16px', // Add margin bottom here
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
              style={{ maxWidth: 260 }}
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
          <CardActions style={{ justifyContent: 'center' }}>
            <Button href={props.DemoBtn}> Demo </Button> 
            <Button href={props.CodeBtn}> Code </Button>
          </CardActions>
        </Card>
      </Grid2>
    </Grid2>
  );
}
