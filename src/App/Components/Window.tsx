import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export function Window() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleModelClick = () => {
    // on click 
      // change our modelTitle state
      // fetch/grab all the attributes of the 3D model scene
  }

  const backlogChildren = ['cube', 'sphere', 'pyramid'];

  const renderChildren:JSX.Element[] = [];
  backlogChildren.forEach((child) => {
    renderChildren.push(<ListItemButton><ListItemText primary={`${child}`}></ListItemText></ListItemButton>)
  })

  return (
    <List
      sx={{ 
        width: '100%', 
        maxWidth: 270, 
        bgcolor: 'background.paper',
        
       }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Scene" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {renderChildren}
      </Collapse>
    </List>
  );
}
