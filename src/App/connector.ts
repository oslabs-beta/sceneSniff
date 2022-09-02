import EventCache from '../BrowserContent/EventCache';
import ThreeDT from '../BrowserContent/ThreeDT'
import utilities from '../BrowserContent/utilities';
import createJSON from '../BrowserContent/createJSON';
import THREE from '../BrowserContent/three'

type Content = {
  port: chrome.runtime.Port
}


//Tool for connecting Browser tab and devtool tab
export default class ContentConnector extends EventTarget {
  port: chrome.runtime.Port

  constructor() {
    super();
    console.log('CONNECTING...')
    //connect this to background.js
    this.port = chrome.runtime.connect({
      name: 'Three-Dev-Tools',
    });

    //notify background.js that devtool has been opened
    this.port.postMessage({
      name: 'connect',
      tabId: chrome.devtools.inspectedWindow.tabId
    });

    //notify background.js that devtool has been disconnected
    this.port.onDisconnect.addListener((request) => {
      console.error('disconnected from background.js', request);
    })

    //receiving message from the inspected window via Browser => CanvasSpy => Background.js => Connector.ts
    this.port.onMessage.addListener((request) => {

      //Notify the browser __THREE_DEVTOOLS__ that devtools has been loaded and is waiting for a reload
      if (request.type === 'devtoolLoaded') {
        //inject ThreeDT script to the inspected document
        chrome.devtools.inspectedWindow.eval(
          `console.log("BEFORE");
            const utilities = (${utilities})();
            const EventCache = (${EventCache})();
            const THREE = (${THREE})();
            const createJSON = (${createJSON})();
            const devtools = new (${ThreeDT})(window.__THREE_DEVTOOLS__);
            console.log('AFTER');
            
            window.__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(\'devtools-ready\'));`
        )
      } else if (request.type === '_request-overview') {
        console.log('Request OVERVIEW: ', request);
        console.log('DETAIL: ', request.data.events[0]);
        //request map of the scene
        this.dispatchEvent(new CustomEvent('request-scene-graph', {
          detail: request.data.events[0] //uuid of the scene
        }))
      } else if (request.type === '_request-scene-objects') {
        //setting activeUuid state to be the uuid of the mesh
        //request from request-scene-objects has 2 objects, one is scene and one is mesh.
        //identify which uuid is mesh, and dispatchEvent with detail assigned to the uuid of the mesh
        console.log('REQUEST SCENE GRAPH TO THE DEV TOOL: ', request)

        //Dispatch the entire request.data.events
        //request.data.events = { {scene: uuid}, {mesh: uuid}, {mesh: uuid} }
        //React receives requets.data.events
        //iterate through the events object, if scene then parent component, if mesh, then child component
        //if scene parent component, prop drill uuid
        //if mesh child component, prop drill uuid
        //In the scene parent component = onClick (this.content.requestEvent(props.uuid))
        //In the Mesh child component = onClick (this.content.requestEvent(props.uuid))
        this.dispatchEvent(new CustomEvent('request-event', {
          detail: request.data.events //uuid of the mesh
        }))
        //map of the scene has been received. When uuid is clicked on, request entity data on that uuid
        // this.dispatchEvent( new CustomEvent('request-event', {
        //   detail: meshObj //uuid of the mesh
        // }))
      } else if ( request.type === '_request-event' ) {
        console.log('Event about to dispatch to mesh-data:', request.data[0]);
        this.dispatchEvent(new CustomEvent('mesh-data', {
          detail: request // Mesh object selected in drop down scene menu
        }))
      }
    })
  }

  //Grabbing the overviewing scene/s on the browser
  getOverview(type: string) {
    this.postMessage('_request-overview', { type })
  }

  //Grabbing Scene's Children
  requestSceneGraph(type: any) {
    console.log('REQUEST SCENE GRAPH TO THE BROWSER: ,', type);
    this.postMessage('_request-scene-graph', { uuid: type.detail.uuid });
  }

  //Grabbing the Mesh Entity Event
  requestEvent(type: any) {
    console.log('TYPE IN REQUEST EVENT METHOD: ', type);
    this.postMessage('_request-event', { uuid: type });
  }


  /*helper function for posting message to the window
  *
  * type: Request type
  * detail: either type of requested information of uuid of the entity requested
  */
  postMessage(type: string, detail: { type: string } | { uuid: string }) {
    chrome.devtools.inspectedWindow.eval(
      `__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent('${type}', {
        detail: ${JSON.stringify(detail)},
      }));`
    );
  }
}