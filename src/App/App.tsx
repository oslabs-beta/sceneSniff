import React from 'react';
import { ReloadButton } from './Buttons/reload';
import { MainContainer } from './Containers/MainContainer';

console.log('LOADED?')

export default function App(): JSX.Element {

  return (
    <>
    <ReloadButton />
    <MainContainer />
    </>
  );
};