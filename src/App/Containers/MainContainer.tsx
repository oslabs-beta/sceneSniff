import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Window } from '../Components/Window';
import { Model } from '../Components/Model';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from "@mui/material";
import {devToolTheme} from "../Themes/themes";
import ContentConnector from '../connector';

export const MainContainer = (): JSX.Element => {
  const [uuids, changeUuids] = useState<any>(null)
  const [meshData, changeMesh] = useState(null);

  const content = new ContentConnector();

  //Event listeners listens for events dispatched by connector
  //content event listeners
  //Request event for specific mesh uuid
  content.addEventListener('request-event', (e: any) => {
    console.log('E AT EVENT LISTENER REQUESTEVENT: ', e);
    changeUuids(e.detail) // Events object with Scene and x amount of mesh objects
  })

  //Request overall map for specific scene uuid
  content.addEventListener('request-scene-graph', (e: any) => {
    console.log('in sceneGraph listener');
    console.log('REQUESTING SCENE AND ITS CHILDREN: ', e);
    content.requestSceneGraph(e);
  })

  content.addEventListener('mesh-data', (e: any) => {
    console.log('E AT mesh-data: ', e)
    changeMesh(e.detail.data[0]) // Mesh Object selected in drop down menu
  })

  return (
    <>
    <ThemeProvider theme={devToolTheme}>
      <CssBaseline />
      <Grid 
      container
      spacing ={2}
      >
        <Grid item xs={6} sm={2.5}>
        {
          //@ts-ignore
          <Window content={content} uuids={uuids} />
        }
        </Grid>
       
        
        <Grid item xs={12} sm={9.5}>
        {
          //@ts-ignore
          <Model content={content} meshData={meshData}/>
        }
        </Grid>

      </Grid>
      </ThemeProvider>
    </>
  );
}


