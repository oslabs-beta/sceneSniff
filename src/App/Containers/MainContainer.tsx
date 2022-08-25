import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Window } from '../Components/Window';
import { Model } from '../Components/Model';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from "@mui/material";
import {devToolTheme} from "../Themes/themes";


export const MainContainer = (): JSX.Element => {

<<<<<<< HEAD
  // https://tailwindcss.com/ check this out in combination with MUI while I am gone lol
  // THANKS!! 👍
  
=======
>>>>>>> dev
  return (
    <>
    <ThemeProvider theme={devToolTheme}>
      <CssBaseline />
      <Grid 
      container
<<<<<<< HEAD
      spacing ={2}
      >
        <Grid item xs={6} sm={2.5}>
=======
      >
        <Grid item>
>>>>>>> dev
        <Window />
        </Grid>
       
        
        <Grid item xs={12} sm={9.5}>
          <Model />
        </Grid>

      </Grid>
      </ThemeProvider>
    </>
  );
}


