import React from 'react';
import { ReloadButton } from './Buttons/reload'
import ContentConnector from './connector'

console.log('LOADED?')

export default function App(): JSX.Element {
  const content = new ContentConnector();

  return (
    <ReloadButton />
  );
};