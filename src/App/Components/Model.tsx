import * as React from 'react';
import { useState } from 'react';
import { RgbaColorPicker } from "react-colorful"
import ToggleButton from '@mui/material/ToggleButton';
import Collapse from '@mui/material/Collapse';
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import MuiInput from '@mui/material/Input';
import Grid from '@mui/material/Grid';


export function Model() {
  const [colorMaterial, setColorMaterial] = useState({ r: 200, g: 150, b: 35, a: 0.5 });
  const [colorLights, setColorLights] = useState({ r: 200, g: 150, b: 35, a: 0.5 });
  const [selected, setSelected] = useState(false);
  
  return (
    <>
<Grid container spacing = {2}
    sx={{
      backgroundColor: 'primary.dark',
      gridAutoFlow: 'row',
      borderRadius: 1
    }}
      >
  <Grid item xs={12} sm={6}>
    <Typography variant='h6' fontWeight='bold' color='primary.main'>Geometry</Typography>
    <Typography color='primary.light'>Type: </Typography>
    <Typography color='primary.light'>Size: </Typography>
    <Typography color='primary.light'>Width: </Typography>
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
    <Divider />
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

    <RgbaColorPicker color={colorLights} onChange={setColorLights} />
    <div className="value">{JSON.stringify(colorLights)}</div>
    
    <Typography color='primary.light'>Intensity: <MuiInput
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          /></Typography>
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