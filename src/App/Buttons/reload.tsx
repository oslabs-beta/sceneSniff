/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import ContentConnector from '../connector';

type PanelType = 'scene' | 'geometries' | 'materials' | 'textures' | 'rendering';

const ReloadButton = (): JSX.Element => {
  console.log('HERE');
  const [panel] = useState<PanelType>('scene');
  const content = new ContentConnector();
  const click = (event: React.MouseEvent<HTMLElement>) => {
    console.log('clicked');
    console.log(event);
    content.getOverview(panel);
  };
  return (
    <div>
      <button onClick={click}>reload</button>
    </div >
  );
};

export default ReloadButton;
