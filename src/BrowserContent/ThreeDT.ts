import EventCache from './EventCache';

export default class ThreeDT {
  target: any
  eventCache: EventCache
  recentEvents: Set<string>

  constructor(target: any) {
    this.target = target;

    this.eventCache = new EventCache();
    this.recentEvents = new Set();

    console.log('DEVTOOL LOADED')

    this.target.addEventListener('observe', (e: any): void => {
      console.log('   EVENT: ', e)
      this.observe(e.detail);
    })
    this.target.addEventListener('register', (e: any) => { console.log('REGISTER') })
    this.target.addEventListener('select', (e: any) => { console.log('SELECT') })

    this.target.addEventListener('_request-event', (e: any): void => this.requestEvent(e.detail && e.detail.uuid));
  }


  // Adds observe events to the cache.
  observe(event: object): (void | undefined) {
    // Adds event to the necessary caching objects and returns the event uuid.
    const uuid: (string | undefined) = this.eventCache.add(event);
    // If no ID, return an error.
    if (!uuid) {
      console.log('No uuid on event');
      return;
    }
    // Add stuff here for changing objects

    // Add the new event uuid to the recentEvents Set.
    this.recentEvents.add(uuid);
  }


  // When a request event is heard, requestEvent is invoked with the uuid of desired event.
  requestEvent(uuid: number): void {
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
}