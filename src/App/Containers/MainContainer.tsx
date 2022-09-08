import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material';
import Window from '../Components/Window';
import Model from '../Components/Model';
import devToolTheme from '../Themes/themes';
import ContentConnector from '../connector';

const MainContainer = (): JSX.Element => {
  const [uuids, changeUuids] = useState<any>(null);
  const [meshData, changeMesh] = useState(null);

  const content = new ContentConnector();

  // Event listeners listens for events dispatched by connector
  // content event listeners
  // Request event for specific mesh uuid
  content.addEventListener('request-event', (e: any) => {
    changeUuids(e.detail); // Events object with Scene and x amount of mesh objects
  });

  // Request overall map for specific scene uuid
  content.addEventListener('request-scene-graph', (e: any) => {
    content.requestSceneGraph(e);
  });

  // Update Model component when mesh data is received
  content.addEventListener('mesh-data', (e: any) => {
    changeMesh(e.detail.data[0]); // Mesh Object selected in drop down menu
  });

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
          // @ts-ignore
          <Window content={content} uuids={uuids} />
        }
        </Grid>

        <Grid item xs={12} sm={9.5}>
        {
          // @ts-ignore
          <Model content={content} meshData={meshData}/>
        }
        </Grid>

      </Grid>
      </ThemeProvider>
    </>
  );
};

export default MainContainer;
