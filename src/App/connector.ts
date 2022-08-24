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

      //Notify the browser __THREE_DEVTOOLS__ that devtools has been loaded and is waiting for a reload
      if ( request.type === 'devtoolLoaded' ) {
        chrome.devtools.inspectedWindow.eval(
          //inject ThreeDT script to the inspected document
          `const devtools = new (${ThreeDT})(window.__THREE_DEVTOOLS__);`
        )
        chrome.devtools.inspectedWindow.eval('window.__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(\'devtools-ready\'));' );
      }
    })
  }

  //Grabbing the overviewing scene/s on the browser
  getOverview( type: string ) {
    this.postMessage( '_getOverview', { type } )
  }

  
  /*helper function for posting message to the window
  *
  * type: Request type
  * detail: either type of requested information of uuid of the entity requested
  */
  postMessage( type: string, detail: { type: string } | { uuid: string } ) {
    chrome.devtools.inspectedWindow.eval(
      `__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent('${ type }', {
        detail: ${ JSON.stringify( detail ) },
      }));`
    );
  }
}