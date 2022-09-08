import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type PanelType = 'scenes' | 'geometries' | 'materials' | 'textures' | 'rendering';

function Window(props: any) {
  const [open, setOpen] = useState(true);
  const [components, changeComponents] = useState<any>([]);
  const [panel] = useState<PanelType>('scenes');
  const { content } = props;

  const handleClick = () => {
    content.getOverview(panel);
  };

  // Ask for event information of the clicked event.
  const handleModelClick = (uuid: any) => {
    content.requestEvent(uuid);
  };

  useEffect(() => {
    if (!props.uuids || !Object.keys(props.uuids).length) return;

    const scenes = [];

    for (const uuid in props.uuids) {
      if (props.uuids[uuid].baseType === 'Scene') {
        const meshes: any[] = [];
        props.uuids[uuid].children.forEach((id: any, index: number) => {
          meshes.push(<ListItemButton key={`mesh-${index}`}onClick={() => handleModelClick(id)} sx={{
            bgcolor: 'primary.dark',
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 1,
          }}
          >
            <ListItemText sx={{
              color: 'primary.main',
            }} primary={`Mesh ${index + 1}`}></ListItemText>
          </ListItemButton>);
        });
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
              borderRadius: 1,
            }}
            onClick={() => { !open ? setOpen(true) : setOpen(false); }}>
            <ListItemText sx={{
              color: 'primary.dark',
            }} primary="Scene" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {meshes}
          </Collapse>
        </List>);
      }
    }
    changeComponents(scenes);
  }, [props.uuids, open]);

  return (
    <div className="LeftBar">
      <button className="LoadButton" onClick={handleClick}>Load Scene</button>
      {components}
    </div>
  );
}

export default Window;
