import React, { useEffect, useState } from 'react';
import { ReloadButton } from './Buttons/reload';
import { MainContainer } from './Containers/MainContainer';
import ContentConnector from './connector'

console.log('LOADED?')

//identifying current active panel state
type PanelType = 'scene' | 'geometries' | 'materials' | 'textures' | 'rendering'

export default function App(): JSX.Element {
  //Checking if page has been reloaded after devtool was opened
  const [ isReloaded, reloaded ] = useState<boolean>( false );

  //identify current active panel state
  const [ panel, changePanel ] = useState<PanelType>( "scene" );

  //Initiate connector.js enabling connection from browser to devtool
  const content = new ContentConnector();

  //When state of panel changes, request the overview using contentConnector
  useEffect(() => {
    content.getOverview( panel );
  }, [ panel ]);

  return (
    <>
    <ReloadButton />
    <MainContainer />
    </>
  );
};