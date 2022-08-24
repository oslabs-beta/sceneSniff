import createJSON from './json'
import utilities from './utilities'

export default class EventCache extends EventTarget {
  scenes: Set<object>
  renderers: any[]
  eventMap: Map<string, object>
  resourcesSent: Map<any, any>
  resources: { images: {}, attributes: {}, devtoolsConfig: {} }

  constructor() {
    super();
    // Holds entire event if event is a scene, Set prevents it from being duplicated or overwritten.
    this.scenes = new Set();
    // Stores events that are renderer events such as functions without a uuid.
    this.renderers = [];
    // If event is a function that renders, set in map with key as created ID and event as value.
    this.eventMap = new Map();

    // STILL UNCERTAIN ON THIS.
    this.resourcesSent = new Map();
    this.resources = {
      images: {},
      attributes: {},
      devtoolsConfig: {},
    };
  }

  // Grabs event object from the eventMap by searching with the id.
  getEvent(id: any): (object | Function | undefined) {
    return this.eventMap.get(id);
  }

  getOverview(type: string): [{ key: string }] {
    const events: [{ key: string, key1: string, key2: string }] = [];
    const eventsAdded = new Set();

    for (let scene of this.scenes) {
      if (type === 'scenes') addEvent(scene);
      else {
        utilities.forEachDependency(scene, event => {
          this.registerEvent(event);
          const valid = type === 'geometries' ? (event.isGeometry || event.isBufferGeometry) :
            type === 'materials' ? event.isMaterial :
              type === 'textures' ? event.isTexture : false;
          if (valid && !eventsAdded.has(event.uuid)) {
            addEvent(event);
          }
        }, {
          recursive: true,
        });
      }
    }
    function addEvent(event: any) {
      events.push({ name: event.name, uuid: event.uuid, baseType: utilities.getBaseType(event) });
      eventsAdded.add(event.uuid);
    }
    return events;
  }

  // Adds event to respective list so that it can be referenced.
  add(event: any): (string | undefined) {
    // Checks if event was given.
    if (!event) {
      console.log('Event is empty');
      return;
    }
    // Obtains ID from event. Uses uuid if present or creates one if not.
    const id: string | undefined = this.getID(event);
    // If no ID was created, end the method.
    if (!id) {
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
  getID(event: any): (string | undefined) {
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
  registerEvent(event: any): void {
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
  JSONpatch(event: any): void {
    // Could later add conditionals here to check for bufferGeometry objects as well.

    // If event.patched doesn't exists, that means that it has not been patched yet with JSON.
    if (!event.patched) {
      // Create prop with key toJSON and set it equal to the createJSON function.
      event.toJSON = createJSON; // THIS NEEDS ADJUSTING
      // Assign the key patched to true on the event obj so that it only happens once.
      event.patched = true;
    }
  }

  // Iterates over events, serializes them, and returns them to the user.
  getSerializedEvent(id: any): any {
    // Obtain the event that is requested from the eventMap by searching with id.
    const reqEvent: any = this.getEvent(id);
    // If requested event does not exist, return undefined.
    if (!reqEvent) return;
    // If the ID passed in is a created ID instead of a uuid and the id has a match in the regex string, run this conditional.
    if (/eventRender/.test(id)) {
      // Run the createJSON func with the 'this' context of the reqEvent.
      const data: any = createJSON.call(reqEvent);
      // Set data type to renderer due to this being a render function.
      data.type = 'renderer';
      // Set the uuid of the data to the argument 'id'.
      data.uuid = id;
      // Return the event data to the user.
      return data;
    }
    // Create object that will cache all of the 3Dobject in the event's attributes.
    const meta: { geometries: string[], materials: string[], textures: string[], shapes: string[], devtoolsConfig: { serializeChildren: boolean } } = {
      geometries: [],
      materials: [],
      textures: [],
      shapes: [],
      // images: this.resources.images,
      // attributes: this.resources.attributes,
      devtoolsConfig: {
        serializeChildren: !reqEvent.isObject3D,
      },
    }
    // Create set to temporary hold the event id's after they have been serialized.
    let eventsAdded: Set<number> = new Set();
    // Invoke the serializeEvent method with the reqEvent and cache object to be serialized.
    let serialEvent: any = this.serializeEvent(reqEvent, meta);

    // Create an events array that hold the serialized event.
    let events = [serialEvent];
    // Add the uuid of the serialized event to the eventsAdded Set.
    eventsAdded.add(serialEvent.uuid);

    this.postSerializedEvent(meta);

    type metaIterator = {
      geometries: string[],
      materials: string[],
      textures: string[],
      shapes: string[]
    }

    // type resourceType = number
    // ADJUST THIS TO WORK IN TYPESCRIPT
    for (let resourceType of ['geometries', 'materials', 'textures', 'shapes']) {
      for (let resource of (meta[resourceType as keyof metaIterator])) {
        if (!eventsAdded.has(resource.uuid)) {
          events.push(resource);
          eventsAdded.add(resource.uuid);
        }
      }
    }
    // Return events to the requested events method in ThreeDT.ts
    return events;
  }

  // This will return the JSON serialized version of the event.
  serializeEvent(event: any, meta: object = {}): object | string {
    // Declare json variable that will hold the value of the serialized JSON version of the event.
    let json;
    try {
      // Format the event to JSON with all object attributes.
      json = event.toJSON(meta);
    } catch (error: any) {
      throw new error(error);
    }
    // If the returned json and the object prop exist, return object prop. If not, return json.
    return json && json.object ? json.object : json;
  }

  // Geomerty attributes are robust. This method moved them all into their own category
  // so that they don't slow everything down.
  postSerializedEvent(data: { geometries: string[], materials: string[], textures: string[], shapes: string[], devtoolsConfig: { serializeChildren: boolean } }): void {
    // Loop through the geometry values in the meta object.
    for (let geo of (data.geometries)) {
      // If data on that value exists.
      if (geo.data) {
        // Create a new id for that geometry value.
        const id = `attribute-${geo.uuid}`;
        // Set the value of that data at that id to the data in the geometry object.
        data.attributes[id] = geo.data;
        // Delete the data from the original source to free up space.
        delete geo.data;
      }
    }
  }
};