
export default class ThreeDT {
    target: any
    eventCache: object
    recentEvents: Set<number>

    constructor( target: any ) {
      this.target = target;

      this.eventCache = new EventCache();
      this.recentEvents = new Set();

      console.log('DEVTOOL LOADED')
      
      this.target.addEventListener('observe', ( e: any ) => {
        console.log('   EVENT: ', e)
        this.observe(e.detail);
      })
      this.target.addEventListener('register', ( e: any ) => {console.log('REGISTER')})
      this.target.addEventListener('select', ( e: any ) => {console.log('SELECT')})

      this.target.addEventListener('_request-entity', (e: any) => this.requestEvent(e.detail && e.detail.uuid));
    }

    // Adds observe events to the cache.
    observe(event: object) {
      // Adds event to the necessary caching objects and returns the event uuid.
      const uuid = this.eventCache.add(event);
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
    requestEvent(uuid: number) {
      try {
        let data = this.eventCache.getSerializedEvent(uuid);
        if (data) {
          
        }
      }
    }
  }