import React from 'react';
import MainContainer from './Containers/MainContainer';

export default function App(): JSX.Element {
  // When state of panel or isReloaded changes, request the overview using contentConnector
  // useEffect(() => {
  //   content.getOverview( panel );
  //   reloaded(true);
  // }, [ panel, isReloaded ]);

  return (
    <>
    {/* <ReloadButton /> */}
    <MainContainer />
    </>
  );
}
