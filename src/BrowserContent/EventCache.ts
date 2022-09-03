/* eslint-disable @typescript-eslint/naming-convention */
import {
  Mesh, Scene, WebGLRenderer,
} from 'three';

export default (() => class EventCache extends EventTarget {
  scenes: Set<Scene>;

  renderers: any[];

  eventMap: Map<string, object>;

  resourcesSent: Map<any, any>;

  resources: { images: {}, attributes: {}, devtoolsConfig: {} };

  utilities: any;

  constructor() {
    super();
    // Holds entire event if event is a scene, Set prevents it from being duplicated or overwritten.
    this.scenes = new Set();
    // Stores events that are renderer events such as functions without a uuid.
    this.renderers = [];
    // If event is a function that renders, set in map with key as created ID and event as value.
    this.eventMap = new Map();
    // @ts-ignore
    this.utilities = utilities;

    // STILL UNCERTAIN ON THIS.
    this.resourcesSent = new Map();
    this.resources = {
      images: {},
      attributes: {},
      devtoolsConfig: {},
    };
  }

  /**
   * Grabs event object from the eventMap by searching with the uuid
   * @param uuid search eventMap with uuid
   * @returns event object with @param uuid
   */
  getEvent(uuid: any): (any) {
    return this.eventMap.get(uuid);
  }

  /**
   * grabs the scene from Canvas Element called by Three.js
   * Request is received from sceneSniffer dev tools
   * @param type the baseType of the event
   * @returns an object with name, uuid and baseType properties
   */
  getOverview(type: string): { name: string, uuid: string, baseType: string }[] {
    type eventObject = { name: string, uuid: string, baseType: string };
    const events: eventObject[] = [];
    const eventsAdded = new Set();
    for (const scene of this.scenes) {
      if (type === 'scenes') this.addEvent(scene, events, eventsAdded);
      else {
        this.utilities.forEachDependency(scene, (event: any) => {
          this.registerEvent(event);
          const valid = type === 'geometries' ? (event.isGeometry || event.isBufferGeometry)
            : type === 'materials' ? event.isMaterial
              : type === 'textures' ? event.isTexture : false;
          if (valid && !eventsAdded.has(event.uuid)) {
            this.addEvent(event, events, eventsAdded);
          }
        }, {
          recursive: true,
        });
      }
    }
    return events;
  }

  /**
   * Registers the event to events array to refer back to
   */
  addEvent(
    event: any,
    events: { name: string, uuid: string, baseType: string }[],
    eventsAdded: Set<any>,
  ) {
    events.push({
      name: event.name,
      uuid: event.uuid,
      baseType: this.utilities.getBaseType(event),
    });
    eventsAdded.add(event.uuid);
  }

  // Adds event to respective list so that it can be referenced.
  add<O extends WebGLRenderer>(event: O | Scene | Mesh): (string | undefined) {
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
    if ('isScene' in event && event.isScene) {
      // Add scene event with all it's attributes to the this.scenes Set.
      this.scenes.add(event);
      // Register event in the eventMap and patchJSON func on to it if it doesn't have one.
      this.registerEvent(event);
    } else if ('render' in event && typeof event.render === 'function') {
      // If event is a function, skip the scene step and place directly inside eventMap.
      this.eventMap.set(id, event);
    } else {
      // If none of the above, throw an error.
      throw new Error('Event must be a scene or render funciton.');
    }
    return id;
  }

  // Obtain or create a unique ID for each event so that it can be referenced later on in the code.
  getID<O extends WebGLRenderer>(event: O | Scene | Mesh): (string | undefined) {
    // Checks if event is a render function.
    if ('render' in event && typeof event.render === 'function') {
      // Checks if event is already in the renderers array.
      let eventRenderIndex: number = this.renderers.indexOf(event);
      // If the event was not in the array, it should have returned a value of -1.
      if (eventRenderIndex === -1) {
        // Set index equal to the length of the array so that
        // we can create a unique ID for the event down below.
        eventRenderIndex = this.renderers.length;
        // Push event to the renderers array.
        this.renderers.push(event);
      }
      // Return custom ID to use as a reference.
      return `eventRender-${eventRenderIndex}`;
    } if ('uuid' in event && event.uuid) {
      // If the event isn't a function and has a uuid, we want to return that ID for future use.
      return event.uuid;
    }
  }

  // Places the event in the eventMap for reference and
  // patches and methods that are missing from the event with patchToJSON().
  registerEvent(event: Scene | Mesh): void {
    // Grab the uuid from the event with object destructering.
    const { uuid } = event;
    // If the uuid exists and the event is not yet
    // in the eventMap(Meaning it was most likely a scene event).
    if (uuid && !this.eventMap.has(uuid)) {
      // Send event to JSONpatch to fill in required methods.
      this.JSONpatch(event);
      // Set the uuid and event in the eventMap for future use.
      this.eventMap.set(uuid, event);
    }
  }

  // Places JSON method on events that don't
  // have the method or don't have all the information needed.
  JSONpatch(event: any): void {
    // Could later add conditionals here to check for bufferGeometry objects as well.

    // If event.patched doesn't exists, that means that it has not been patched yet with JSON.
    if (!event.patched) {
      // Create prop with key toJSON and set it equal to the createJSON function.
      // @ts-ignore
      event.toJSON = createJSON;
      // Assign the key patched to true on the event obj so that it only happens once.
      event.patched = true;
    }
  }

  /**
   * Requests for all events related to scene. For scenes, meshes, etc.
   * @param uuid the uuid of a string
   */
  requestSceneObjects(uuid: string) {
    const objCache: any = {};
    const objects: any = [this.getEvent(uuid)];

    while (objects.length) {
      const object = objects.shift();
      this.registerEvent(object);

      objCache[object.uuid] = {
        uuid: object.uuid,
        name: object.name,
        baseType: this.utilities.getBaseType(object),
        children: [],
      };

      if (object.parent) {
        objCache[object.parent.uuid].children.push(object.uuid);
      }

      if (object.children.length > 0) {
        objects.push(...object.children);
      }
    }
    return objCache;
  }

  // Iterates over events, serializes them, and returns them to the user.
  getSerializedEvent(id: string): any {
    // Obtain the event that is requested from the eventMap by searching with id.
    const reqEvent: any = this.getEvent(id);

    function serializeEvent(event: any, meta: object = {}): object | string {
      // Declare json variable that will hold the value of the serialized JSON version of the event.
      let json;
      try {
        // Format the event to JSON with all object attributes.
        json = event.toJSON(meta);
      } catch (error: any) {
        throw new Error(error);
      }
      // If the returned json and the object prop exist, return object prop. If not, return json.
      return json && json.object ? json.object : json;
    }

    // Geometry attributes are robust. This method moved them all into their own category
    // so that they don't slow everything down.
    function postSerializedEvent(data: any): void {
    // Loop through the geometry values in the meta object.
      for (const geo of (data.geometries)) {
      // If data on that value exists.
        if (geo.data) {
        // Create a new id for that geometry value.
          const geoId = `attribute-${geo.uuid}`;
          // Set the value of that data at that id to the data in the geometry object.
          data.attributes[geoId] = geo.data;
          // Delete the data from the original source to free up space.
          delete geo.data;
        }
      }
    }

    // If requested event does not exist, return undefined.
    if (!reqEvent) return;
    // If the ID passed in is a created ID instead of a
    // uuid and the id has a match in the regex string, run this conditional.
    if (/eventRender/.test(id)) {
      // Run the createJSON func with the 'this' context of the reqEvent.
      // @ts-ignore
      const data: any = createJSON.call(reqEvent);
      // Set data type to renderer due to this being a render function.
      data.type = 'renderer';
      // Set the uuid of the data to the argument 'id'.
      data.uuid = id;
      // Return the event data to the user.
      return data;
    }
    // Create object that will cache all of the 3Dobject in the event's attributes.
    const meta: any = {
      geometries: [],
      materials: [],
      textures: [],
      shapes: [],
      // images: this.resources.images,
      // attributes: this.resources.attributes,
      devtoolsConfig: {
        serializeChildren: !reqEvent.isObject3D,
      },
    };
    // Create set to temporary hold the event id's after they have been serialized.
    const eventsAdded: Set<number> = new Set();
    // Invoke the serializeEvent method with the reqEvent and cache object to be serialized.
    const serialEvent: any = serializeEvent(reqEvent, meta);
    // Create an events array that hold the serialized event.
    const events = [serialEvent];
    // Add the uuid of the serialized event to the eventsAdded Set.
    eventsAdded.add(serialEvent.uuid);
    postSerializedEvent(meta);

    type metaIterator = {
      geometries: any[],
      materials: any[],
      textures: any[],
      shapes: any[]
    };

    // type resourceType = number
    // ADJUST THIS TO WORK IN TYPESCRIPT
    for (const resourceType of ['geometries', 'materials', 'textures', 'shapes']) {
      for (const resource of (meta[resourceType as keyof metaIterator])) {
        if (!eventsAdded.has(resource.uuid)) {
          events.push(resource);
          eventsAdded.add(resource.uuid);
        }
      }
    }
    // Return events to the requested events method in ThreeDT.ts
    return events;
  }
});
