import {
  Scene, Mesh, WebGLRenderer,
} from 'three';

export default class ThreeDT<T extends EventTarget> {
  target: T;

  eventCache: any;

  recentEvents: Set<string>;

  constructor(target: T) {
    this.target = target;
    // @ts-ignore EventCache instantiated in injected script
    this.eventCache = new EventCache();
    this.recentEvents = new Set();

    // Event listeners that are coming from either Three.js itself, or sceneSniffer dev tools
    // Flow of the data is events are dispatched from Three.js or sceneSniffer
    // Respective methods are invoked, and conducts relative business logic
    // Once finished, send data back to canvasSpy (Content Script)
    this.target.addEventListener('observe', ((e: CustomEvent) => {
      this.observe(e.detail);
    }) as EventListener);
    this.target.addEventListener('register', (() => { /* TODO */ }) as EventListener);
    this.target.addEventListener('select', (() => { /* TODO */ }) as EventListener);
    this.target.addEventListener('_request-overview', ((e: CustomEvent) => this.requestOverview(e.detail && e.detail.type)) as EventListener);
    this.target.addEventListener('_request-event', ((e: CustomEvent): void => this.requestEvent(e.detail.uuid)) as EventListener);
    this.target.addEventListener('_request-scene-graph', ((e: CustomEvent): void => this.requestSceneObjects(e.detail && e.detail.uuid)) as EventListener);
    this.target.addEventListener('_update-event', ((e : CustomEvent): void => this.updateEvent(e.detail)) as EventListener);
  }

  // Adds observe events to the cache.
  observe<O extends WebGLRenderer>(event: O | Scene | Mesh): void {
    // Adds event to the necessary caching objects and returns the event uuid.
    const uuid: (string | undefined) = this.eventCache.add(event);
    // If no ID, return an error.
    if (!uuid) {
      console.log('No uuid on event');
    } else {
      // Add the new event uuid to the recentEvents Set.
      this.recentEvents.add(uuid);
    }
  }

  // Look for the event and all children related to our scene then returns data to canvasSpy
  requestSceneObjects(uuid: string) {
    try {
      const data: any[] = this.eventCache.requestSceneObjects(uuid);
      this.sendEvent('_request-scene-objects', {
        type: uuid,
        events: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // When a request event is heard, requestEvent is invoked with the uuid of desired event.
  requestEvent(uuid: any): void {
    // Create a variable 'data' and set it equal to
    // the serialized version of the requested event from cache.
    const data: any = this.eventCache.getSerializedEvent(uuid);
    // If getSerializedEvent returned data without any errors.
    if (data) {
      // Send that data and type to the send() method.
      // This will post the event data to the browser window.
      this.sendEvent('_request-event', data);
    }
    // this.requestSceneObjects(uuid);
  }

  // Update event in the inspected browser with value received from sceneSniffer
  updateEvent(detail: any) {
    const {
      uuid, property, value, type,
    } = detail;
    const event = this.eventCache.getEvent(uuid);

    if (!event) {
      return;
    }

    // @ts-ignore
    // utilities exists in user context land via script loading
    const { target, key } = utilities.getTargetAndKey(
      event,
      property.substring(2, property.length),
    );

    if (type === 'enum') {
      target[key] = value === -1 ? null : value;
    } else {
      target[key][property[0]] = value;
    }
  }

  // Request uuids of scenes and returns data to canvasSpy
  requestOverview(type: string): void {
    try {
      const data: any[] = this.eventCache.getOverview(type);
      this.sendEvent('_request-overview', {
        type,
        events: data,
      });
      // this.requestEvent(data[0].uuid);
    } catch (error) {
      console.error(error);
    }
  }

  // Sends the serialized event to the window (canvasSpy)
  // so that the user can see the data of the requested event.
  sendEvent(type: string, data: { type: string, events: any[] }): void {
    try {
      // If data and type provided successfully, post to the browser window.
      window.postMessage({
        id: 'sceneSniff',
        type,
        data,
      }, '*');
    } catch (error: any) {
      // If error, parse the serialized data and post to the browser window.
      // This might take place if the data could not be cloned.
      window.postMessage({
        id: 'sceneSniff',
        type,
        data: JSON.parse(JSON.stringify(data)),
      });
    }
  }
}
