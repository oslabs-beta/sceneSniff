import ThreeDT from '../BrowserContent/ThreeDT'

type Content = {
  port: chrome.runtime.Port
}


//Tool for connecting Browser tab and devtool tab
export default class ContentConnector extends EventTarget {
  port: chrome.runtime.Port

  constructor() {
    super();

    console.log( 'CONNECTING...' )

    //connect this to background.js
    this.port = chrome.runtime.connect( {
       name: 'Three-Dev-Tools',
    } );

    //notify background.js that devtool has been opened
    this.port.postMessage({
      name: 'connect',
      tabId: chrome.devtools.inspectedWindow.tabId
    });

    //notify background.js that devtool has been disconnected
    this.port.onDisconnect.addListener( (request) => {
      console.error( 'disconnected from background.js', request );
    })

    //receiving message
    this.port.onMessage.addListener( (request) => {
      console.log('LOADED RECEIVED')
      if ( request.type === 'devtoolLoaded' ) {
        chrome.devtools.inspectedWindow.eval(`
        console.log('BEFORE')
        const devtools = new (${ThreeDT})(window.__THREE_DEVTOOLS__);
        console.log('AFTER ', devtools)`)
        chrome.devtools.inspectedWindow.eval('window.__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(\'devtools-ready\'));' );
      }
    })
  }
}