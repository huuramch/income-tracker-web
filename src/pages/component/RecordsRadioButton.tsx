import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RecordsRadioButton = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Types</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="All" />
        <FormControlLabel value="male" control={<Radio />} label="Income" />
        <FormControlLabel value="other" control={<Radio />} label="Expense" />
      </RadioGroup>
    </FormControl>
  );
}