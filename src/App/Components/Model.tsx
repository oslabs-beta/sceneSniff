import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';

export function Model() {
  const [modelTitle, setModelTitle] = useState('Model');

  return (
    <>
    <Box
      sx={{
        width: 400,
        height: 500,
        backgroundColor: 'primary.dark',
      }}
      >
    <Typography variant='h4' align='center'>{modelTitle}</Typography>
    <Typography variant='h6'>Size</Typography>
    <Slider
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    <Slider
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    <Slider
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    <Typography variant="h6">Color</Typography>;
    <Typography variant="h6">Material</Typography>;
    <Typography variant="h6">Texture</Typography>;
    </Box>
    </>
  );
}