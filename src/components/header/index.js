import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
      backgroundColor: 'white',
    },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs style={{paddingLeft:10, paddingRight:10}}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" href='#home'/>
        <Tab label="Resume" href='#resume'/>
        <Tab label="Portfolio" href='#portfolio'/>
        <Tab label="Contact" href='#contact'/>
      </Tabs>
    </Paper>
  );
}