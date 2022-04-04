import {
  Box, FormControlLabel, Collapse, Switch,
} from '@mui/material';
import React from 'react';
import FormInput from '../FormInput/FormInput';

const HeaderInput = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 300 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
            height: 120,
            width: 250,
          },
        }}
      >
        <div>
          <Collapse in={checked}><FormInput /></Collapse>
        </div>
      </Box>
    </Box>
  );
};

export default HeaderInput;
