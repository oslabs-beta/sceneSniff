import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { Window } from '../Components/Window';
import { Model } from '../Components/Model';
import { CameraButton } from '../Buttons/camera';
import { LightsButton } from '../Buttons/lights';
import { SceneButton } from '../Buttons/scene';
import Grid from '@mui/material/Grid';

export const MainContainer = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Grid 
      container
      direction="column"
      >
        <Grid item
          xs={4}
          >
        <Window />
        <SceneButton />
        <LightsButton />
        <CameraButton />
        </Grid>
        
        <Grid item>
          <Model />
        </Grid>

      </Grid>
    </>
  );
}


