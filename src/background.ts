type browserId = {
  tabId: number,
  frameId: number
}

type message = {
  tabId: number,
  port: chrome.runtime.Port,
  name: string
}

const connections = new Map();

chrome.runtime.onConnect.addListener( ( port ) => {
  let tabId: number;

  const onMessage = ( message: message ) => {
    console.log( 'MESSAGE RECEIVED: ', message.name );
    tabId = message.tabId;
    console.log( 'devtool opened' );
    if ( message.name === 'connect' ) {
      connections.set( tabId, port )
    }
  }

  port.onMessage.addListener( onMessage );

  port.onDisconnect.addListener( ( port ) => {
    port.onMessage.removeListener( onMessage );
    connections.delete( tabId );
  } );
} );

chrome.webNavigation.onCommitted.addListener( ( { tabId, frameId }: browserId ): void => {
  console.log( 'REFRESH?' );
  if ( frameId !== 0 ) return;

  console.log( 'FRAMEID: ', frameId );
  console.log( 'TABID: ', tabId );
  console.log( 'CONNECTIONS: ', connections );
});