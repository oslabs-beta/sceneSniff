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

//Store Devtool tabId to connections map
chrome.runtime.onConnect.addListener( ( port ) => {
  let tabId: number;
  console.log(port)
  const onMessage = ( message: message ) => {
    console.log( 'MESSAGE RECEIVED: ', message.name );
    tabId = message.tabId;
    console.log( 'devtool opened' );
    if ( message.name === 'connect' ) {
      connections.set( tabId, port )
    }
  }

  port.onMessage.addListener( onMessage );

  //When connection is lost to devtool, remove from the connections map
  port.onDisconnect.addListener( ( port ) => {
    port.onMessage.removeListener( onMessage );
    connections.delete( tabId );
  } );
} );

chrome.runtime.onMessage.addListener( (req, res) => {
  console.log('BACKGROUND: ', req);
})

//When refreshed, check if tabId exists
chrome.webNavigation.onCommitted.addListener( ( { tabId, frameId }: browserId ): void => {
  console.log( 'REFRESH?' );
  if ( frameId !== 0 ) return;

  console.log( 'FRAMEID: ', frameId );
  console.log( 'TABID: ', tabId );
  console.log( 'CONNECTIONS: ', connections );

  if (connections.has(tabId)) {
    connections.get(tabId).postMessage( {
      type: 'devtoolLoaded',
      id: 'three-dev-tools'
    } )
  }
});