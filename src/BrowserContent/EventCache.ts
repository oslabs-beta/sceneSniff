export default (() => {

  // Storing of events for future use within the devtool.
  return class EventCache extends EventTarget {
    scenes: Set<object>
    renderers: any[]
    eventMap: Map<number, object>
    
    constructor() {
      super();
      // Holds entire event if event is a scene, Set prevents it from being duplicated or overwritten.
      this.scenes = new Set();
      // Stores events that are renderer events such as functions without a uuid.
      this.renderers = [];
      // If event is a function that renders, set in map with key as created ID and event as value.
      this.eventMap = new Map();
    }

    // Adds event to respective list so that it can be referenced.
    add(event: any) {
      // Checks if event was given.
      if (!event) {
        console.log('Event is empty');
        return;
      }
      // Obtains ID from event. Uses uuid if present or creates one if not.
      const id: number = this.getID(event);
      // If no ID was created, end the method.
      if(!id) {
        console.log('No ID was able to be created');
        return;
      }
      // Checks if event called is the scene.
      if (event.isScene) {
        // Add scene event with all it's attributes to the this.scenes Set.
        this.scenes.add(event);
        // Register event in the eventMap and patchJSON func on to it if it doesn't have one.
        this.registerEvent(event);
      } else if (typeof event.render === 'function') {
        // If event is a function, skip the scene step and place directly inside eventMap.
        this.eventMap.set(id, event);
      } else {
        // If none of the above, throw an error.
        throw new Error('Event must be a scene or render funciton.');
      }
      return id;
    }

    // Obtain or create a unique ID for each event so that it can be referenced later on in the code.
    getID(event: any) {
      // Checks if event is a render function.
      if (typeof event.render === 'function') {
        // Checks if event is already in the renderers array.
        let eventRenderIndex: number = this.renderers.indexOf(event);
        // If the event was not in the array, it should have returned a value of -1.
        if (eventRenderIndex === -1) {
          // Set index equal to the length of the array so that we can create a unique ID for the event down below.
          eventRenderIndex = this.renderers.length;
          // Push event to the renderers array.
          this.renderers.push(event);
        }
        // Return custom ID to use as a reference.
        return `eventRender-${eventRenderIndex}`;
      } else if (event.uuid) {
        // If the event isn't a function and has a uuid, we want to return that ID for future use.
        return event.uuid;
      }
    }

    // Places the event in the eventMap for reference and patches and methods that are missing from the event with patchToJSON().
    registerEvent(event: any) {
      // Grab the uuid from the event with object destructering.
      const { uuid } = event;
      // If the uuid exists and the event is not yet in the eventMap(Meaning it was most likely a scene event).
      if (uuid && !this.eventMap.has(uuid)) {
        // Send event to JSONpatch to fill in required methods.
        this.JSONpatch(event);
        // Set the uuid and event in the eventMap for future use.
        this.eventMap.set(uuid, event);
      }
    }

    // Places JSON method on events that don't have the method or don't have all the information needed.
    JSONpatch(event: any) {
      // Could later add conditionals here to check for bufferGeometry objects as well.

      // If event.patched doesn't exists, that means that it has not been patched yet with JSON.
      if (!event.patched) {
        // Create prop with key toJSON and set it equal to the createJSON function.
        event.toJSON = createJSON;
        // Assign the key patched to true on the event obj so that it only happens once.
        event.patched = true;
      }
    }


  }
})