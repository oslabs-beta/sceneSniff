import { Object3D, Scene, Mesh, WebGLRenderer } from 'three';

export default class ThreeDT<T extends EventTarget> {
  target: T
  eventCache: any
  recentEvents: Set<string>

  constructor(target: T) {
    
    console.log('TESTING THREEDT');
    this.target = target;
    //@ts-ignore
    console.log(EventCache);
    //@ts-ignore EventCache instantiated in injected script
    this.eventCache = new EventCache();
    console.log(this.eventCache);
    this.recentEvents = new Set();

    console.log('DEVTOOL LOADED')

    this.target.addEventListener('observe', (( e: CustomEvent ) => {
      console.log('   EVENT: ', e)
      this.observe(e.detail);
    }) as EventListener)
    this.target.addEventListener('register', ((e: CustomEvent) => { console.log('REGISTER') }) as EventListener)
    this.target.addEventListener('select', ((e: CustomEvent) => { console.log('SELECT') }) as EventListener)

    this.target.addEventListener('_request-event', ((e: CustomEvent): void => this.requestEvent(e.detail && e.detail.uuid)) as EventListener);
  }

  // Adds observe events to the cache.
  observe<O extends WebGLRenderer>(event: O | Scene | Mesh): void {
    // Adds event to the necessary caching objects and returns the event uuid.
    const uuid: (string | undefined) = this.eventCache.add(event);
    // If no ID, return an error.
    if (!uuid) {
      console.log('No uuid on event');
    } else {
      // Add stuff here for changing objects

      // Add the new event uuid to the recentEvents Set.
      this.recentEvents.add(uuid);
    }
  }


  // When a request event is heard, requestEvent is invoked with the uuid of desired event.
  requestEvent(uuid: string): void {
    // Create a variable 'data' and set it equal to the serialized version of the requested event from cache.
    let data: any[] = this.eventCache.getSerializedEvent(uuid);
    // If getSerializedEvent returned data without any errors.
    if (data) {
      // Send that data and type to the send() method. This will post the event data to the browser window.
      this.sendEvent('event', data);
    }
  }


  // Sends the serialized event to the window so that the user can see the data of the requested event.
  sendEvent(type: string, data: any[]): void {
    try {
      // If data and type provided successfully, post to the browser window.
      window.postMessage({
        id: 'sceneSniff',
        type: type,
        data,
      }, '*');
    } catch (error: any) {
      // If error, parse the serialized data and post to the browser window. This might take place if the data could not be cloned.
      window.postMessage({
        id: 'sceneSniff',
        type,
        data: JSON.parse(JSON.stringify(data))
      });
    }
  }
};