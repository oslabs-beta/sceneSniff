import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import ContentConnector from '../connector';

type PanelType = 'scenes' | 'geometries' | 'materials' | 'textures' | 'rendering'

export function Window(props: any) {
  const [open, setOpen] = useState(true);
  const [components, changeComponents] = useState<any>([])
  const [panel] = useState<PanelType>("scenes");
  // const [uuids, changeUuids] = useState<any>(null)

  // const content = new ContentConnector();
  const content = props.content;
  // //content event listeners
  // //Request event for specific mesh uuid
  // content.addEventListener('request-event', (e: any) => {
  //   console.log('E AT EVENT LISTENER REQUESTEVENT: ', e);
  //   changeUuids(e.detail) // Events object with Scene and x amount of mesh objects
  // })

  // //Request overall map for specific scene uuid
  // content.addEventListener('request-scene-graph', (e: any) => {
  //   console.log('in sceneGraph listener');
  //   console.log('REQUESTING SCENE AND ITS CHILDREN: ', e);
  //   content.requestSceneGraph(e);
  // })

  useEffect(() => {
    if (!props.uuids || !Object.keys(props.uuids).length) return;

    const scenes = [];

    for (const uuid in props.uuids) {
      if (props.uuids[uuid].baseType === "Scene") {
        console.log("ITERATING UUID: ", uuid)
        const meshes: any[] = []
        props.uuids[uuid].children.forEach((id: any, index: number) => {
          meshes.push(<ListItemButton key={`mesh-${index}`}onClick={() => handleModelClick(id)} sx={{
            bgcolor: 'primary.dark',
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 1
          }}
          >
            <ListItemText sx={{
              color: 'primary.main'
            }} primary={`Mesh`}></ListItemText>
          </ListItemButton>
          )
        })
        scenes.push(<List
          sx={{
            width: '90%',
            bgcolor: 'background.paper',
  
          }}
          component="nav"
        >
          <ListItemButton
            sx={{
              bgcolor: 'primary.main',
              borderRadius: 1
            }}
            onClick={() => { !open ? setOpen(true) : setOpen(false)}}>
            <ListItemText sx={{
              color: 'primary.dark'
            }} primary="Scene" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {meshes}
          </Collapse>
        </List>)//push <ListItemButton> component and populate it with scene's children uuid onClick={() => this.content.requestEvent( uuid )}
      }
    }
    changeComponents(scenes);
  }, [props.uuids, open])

  const handleClick = () => {
    content.getOverview(panel);
  };

  const handleModelClick = (uuid: any) => {
    // on click 
    // change our modelTitle state
    // fetch/grab all the attributes of the 3D model scene
    console.log('REQUESTING EVENT FOR: ', uuid);
    content.requestEvent(uuid);
  }

  return (
    <div className="LeftBar">
      <button className="LoadButton" onClick={handleClick}>Load Scene</button>
      {components}
    </div>
  );
}
