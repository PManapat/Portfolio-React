import React from 'react';
import { styled } from '@mui/material/styles';
import { Tab, Tabs, Paper } from '@mui/material';

const StyledTabs = styled(Tabs)({
  backgroundColor: 'black',
  color: 'white',
});

const StyledTab = styled(Tab)({
  color: 'white',
  '&.Mui-selected': {
    color: 'white',
  },
});

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <StyledTabs
        value={value}
        onChange={handleChange}
        centered
      >
        <StyledTab label="Home" href='#home' />
        <StyledTab label="Resume" href='#about' />
        <StyledTab label="Portfolio" href='#portfolio' />
        <StyledTab label="Contact" href='#contact' />
      </StyledTabs>
    </Paper>
  );
}