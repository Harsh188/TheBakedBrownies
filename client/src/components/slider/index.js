import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';


const marks = [
  {
    value: 0,
    label: 'Low',
  },

  {
    value: 50,
    label: 'Medium',
  },
  {
    value: 100,
    label: 'High',
  },
];

function SliderComponent({data}) {
  return (
    <Box sx={{ width: 300 }}>
      <SliderComponent
        aria-label="Restricted values"
        defaultValue={data}
        step={50}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}



export default SliderComponent;
