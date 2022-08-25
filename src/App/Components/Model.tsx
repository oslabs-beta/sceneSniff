import * as React from 'react';
import { useState } from 'react';
<<<<<<< HEAD
import { RgbaColorPicker } from "react-colorful"
import ToggleButton from '@mui/material/ToggleButton';
import Collapse from '@mui/material/Collapse';
=======
import Box from '@mui/material/Box';
>>>>>>> dev
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import MuiInput from '@mui/material/Input';
import Grid from '@mui/material/Grid';


export function Model() {
<<<<<<< HEAD
  const [colorMaterial, setColorMaterial] = useState({ r: 200, g: 150, b: 35, a: 1 });
  const [colorLights, setColorLights] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  
=======
  const [modelTitle, setModelTitle] = useState('Model');

>>>>>>> dev
  return (
    <>
<Grid container spacing = {2}
    sx={{
      backgroundColor: 'primary.dark',
      gridAutoFlow: 'row',
      borderRadius: 1
    }}
      >
<<<<<<< HEAD
  <Grid item xs={12} sm={6}>
    <Typography variant='h6' fontWeight='bold' color='primary.main'>Geometry</Typography>
    <Typography color='primary.light'>Type: </Typography>
    <Typography color='primary.light'>Size: </Typography>
    <Typography color='primary.light'>Width: </Typography>
=======
    <Typography variant='h4' align='center'>{modelTitle}</Typography>
    <Typography variant='h6'>Size</Typography>
>>>>>>> dev
    <Slider
        sx = {{
          width: 1/2
        }}
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    <Typography color='primary.light'>Height</Typography>
    <Slider
    sx = {{
      width: 1/2
    }}
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    <Typography color='primary.light'>Depth</Typography>
    <Slider
     sx = {{
      width: 1/2
    }}
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
  </Grid>

  <Grid item xs={12} sm={6}>
    <Typography variant="h6" fontWeight="fontWeightBold" color='primary.main'>Material</Typography>
    <Typography color='primary.light'>Type: </Typography>
    <Typography color='primary.light'>Color: </Typography>
    <ToggleButton
      sx={{
        backgroundColor: `rgb(${colorMaterial.r}, ${colorMaterial.g}, ${colorMaterial.b})`,
        opacity: colorMaterial.a
      }}
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
    </ToggleButton>
    <Collapse in={selected} timeout="auto" unmountOnExit> 
      <RgbaColorPicker color={colorMaterial} onChange={setColorMaterial} />
      <div className="value">{JSON.stringify(colorMaterial)}</div>
    </Collapse>
  </Grid>

    
  <Grid item xs={12} sm={6}>
    <Typography variant="h6" fontWeight='fontWeightBold' color='primary.main'>Lights</Typography>
    <Typography color='primary.light'>Color</Typography>
    <ToggleButton
      sx={{
        backgroundColor: `rgb(${colorLights.r}, ${colorLights.g}, ${colorLights.b})`,
        opacity: colorLights.a
      }}
      value="check"
      selected={selected2}
      onChange={() => {
        setSelected2(!selected2);
      }}
    >
       </ToggleButton>
    <Collapse in={selected2} timeout="auto" unmountOnExit> 
    <RgbaColorPicker color={colorLights} onChange={setColorLights} />
    <div className="value">{JSON.stringify(colorLights)}</div>
    </Collapse>
    {/* <Typography color='primary.light'>Intensity: <MuiInput
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          /></Typography> */}
  </Grid>

  <Grid item xs={12} sm={6}>
    <Typography variant="h6" fontWeight='fontWeightBold' color='primary.main'>Perspective Camera</Typography>
    <Typography color='primary.light'>FOV: </Typography>
    <Typography color='primary.light'>Zoom: </Typography>
    <Typography color='primary.light'>Aspect Ratio: </Typography>
    <Typography color='primary.light'>Near plane: </Typography>
    <Typography color='primary.light'>Far plane: </Typography>           
  </Grid>

</Grid>
    </>
  );
}