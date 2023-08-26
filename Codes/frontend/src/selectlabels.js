import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';


export default function SelectLabels(props) {

  return (
    <Grid item xs={4} sm={4}>
    <div className='select'>
      <FormControl sx={{ m: 0, width:props.wid}}>
        <InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
        <Select 
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.value}
          label={props.label}
          onChange={props.onChange}
          //autoWidth
          className='dropdown'
          disabled={props.disabled}   
        >
          <MenuItem value="">
            <em> -- select -- </em>
          </MenuItem>
          {props.lists.map( (list) =>
            <MenuItem value={list} key={list}>
              {list}
            </MenuItem>
          )}
        </Select>
        <FormHelperText className='helpertext'>Select Your Choice</FormHelperText>
      </FormControl>
    </div>
    </Grid>
  );

}