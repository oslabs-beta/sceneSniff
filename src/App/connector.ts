import EventCache from '../BrowserContent/EventCache';
import ThreeDT from '../BrowserContent/ThreeDT';
import utilities from '../BrowserContent/utilities';
import createJSON from '../BrowserContent/createJSON';
import THREE from '../BrowserContent/three';

// Tool for connecting Browser tab and devtool tab
export default class ContentConnector extends EventTarget {
  port: chrome.runtime.Port;

  constructor() {
    super();
    // connect this to background.js
    this.port = chrome.runtime.connect({
      name: 'Three-Dev-Tools',
    });

    // notify background.js that devtool has been opened
    this.port.postMessage({
      name: 'connect',
      tabId: chrome.devtools.inspectedWindow.tabId,
    });

    // notify background.js that devtool has been disconnected
    this.port.onDisconnect.addListener((request) => {
      console.error('disconnected from background.js', request);
    });

    // receiving message from the inspected window
    // via Browser => CanvasSpy => Background.js => Connector.ts
    this.port.onMessage.addListener((request) => {
      // Notify the browser __THREE_DEVTOOLS__ that
      // devtools has been loaded and is waiting for a reload
      if (request.type === 'devtoolLoaded') {
        // inject ThreeDT script to the inspected document
        chrome.devtools.inspectedWindow.eval(
          `
            const utilities = (${utilities})();
            const EventCache = (${EventCache})();
            const THREE = (${THREE})();
            const createJSON = (${createJSON})();
            const devtools = new (${ThreeDT})(window.__THREE_DEVTOOLS__);
            
            window.__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('devtools-ready'));`,
        );
      } else if (request.type === '_request-overview') {
        // request map of the scene
        this.dispatchEvent(new CustomEvent('request-scene-graph', {
          detail: request.data.events[0], // uuid of the scene
        }));
      } else if (request.type === '_request-scene-objects') {
        this.dispatchEvent(new CustomEvent('request-event', {
          detail: request.data.events, // uuid of the mesh
        }));
      } else if (request.type === '_request-event') {
        this.dispatchEvent(new CustomEvent('mesh-data', {
          detail: request, // Mesh object selected in drop down scene menu
        }));
      }
    });
  }

  // Helper Functions to post to inspected window
  // Grabbing the overviewing scene/s on the browser
  getOverview(type: string) {
    this.postMessage('_request-overview', { type });
  }

  // Grabbing Scene's Children
  requestSceneGraph(type: any) {
    this.postMessage('_request-scene-graph', { uuid: type.detail.uuid });
  }

  // Grabbing the Mesh Entity Event
  requestEvent(type: any) {
    this.postMessage('_request-event', { uuid: type });
  }

  updateEvent(uuid: any, property: any, value: any, type: any) {
    this.postMessage('_update-event', {
      uuid, property, value, type,
    });
  }

  /* helper function for posting message to the window
  *
  * type: Request type
  * detail: either type of requested information of uuid of the entity requested
  */
  postMessage(
    type: string,
    detail: { type: string } |
    { uuid: string } |
    { uuid: any, property: any, value: any, type: any },
  ) {
    chrome.devtools.inspectedWindow.eval(
      `__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent('${type}', {
        detail: ${JSON.stringify(detail)},
      }));`,
    );
  }
}
