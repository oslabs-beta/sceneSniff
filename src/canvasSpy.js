const script = document.createElement('script');
console.log('INJECTING');

script.text = `
(() => {
  console.log('TESTING');

  const $devtoolsReady = Symbol('devtoolsReady');
  const $backlog = Symbol('backlog');

  console.log('INJECTED');

const target = new class ThreeTarget extends EventTarget {
  constructor() {
    super();
    this[$devtoolsReady] = false;
    this[$backlog] = [];
    this.addEventListener('devtools-ready', e => {
      this[$devtoolsReady] = true;
      for (let event of this[$backlog]) {
        this.dispatchEvent(event);
      }
    }, { once: true });
  }
  
  dispatchEvent(event) {
    if (this[$devtoolsReady] || event.type === 'devtools-ready') {
      super.dispatchEvent(event);
    } else {
      this[$backlog].push(event);
    }
  }
}

Object.defineProperty(window, '__THREE_DEVTOOLS__', {
  value: target,
});

})();
`;


script.onload = () => {
  console.log('SCRIPT RUNNING');
  ( script.parentNode ) ? script.parentNode.removeChild(script) : null;
}

( document.head || document.documentElement ).appendChild(script);















// // Object.getOwnPropertyNames(THREE).forEach(elem => {
// //   console.log( elem );
// //   // console.log('IS READONLY: ', THREE[elem as keyof typeof THREE])
// //   const description= Object.getOwnPropertyDescriptor(THREE, elem)
  
// //   if (description) {
// //     description.configurable ? console.log(elem, ' is conf') : console.log(elem, ' is not conf');
// //   }
// // })

// // class Temp {
// //   constructor() {

// //   }
// // }



// // function threeJsWrapper(obj: { [ k: string ]: any }, fn: Function) {
// //   // console.log('1');
// //   // console.log(obj);
// //   Object.getOwnPropertyNames(obj).forEach((key) => {
// //     let prop = obj[key];
// //     // console.log('prop: ', key, ' ', obj[key])
// //     if (typeof prop === 'function') {
// //       // console.log('MADE IT!!!!!!!!');
// //       const origProp = prop;
// //       obj[key] = (...args: any[]) => {
        
// //         fn(key, args);
// //         return Reflect.apply(origProp, obj, args);
// //       // return Reflect.construct(origProp, args);
// //       }
// //     }
// //   });
// // }

// // obj[key] = (...args: any[]) => {
// //   console.log('2');
// //   fn(key, args);
// //   return Reflect.apply(origProp, obj, args);
//   // return Reflect.construct(origProp, args);
// // }


// // const box = new THREE.BoxGeometry(1, 1, 1);
// // console.log("BOX: ", box)
// // console.log('THERE: ', THREE.BoxGeometry);
// // threeJsWrapper(THREE, console.log);
// // console.log('HERE: ', THREE.BoxGeometry);
// // const box = new THREE.BoxGeometry(1, 1, 1);
// // console.log("BOX: ", box)
// // const geometryBox = new THREE.BoxGeometry(800, 10, 800);
// // const materialBox = new THREE.MeshStandardMaterial( {color: 0x3d251e} );
// // const box = new THREE.Mesh( geometryBox, materialBox );
// // console.log("BOX: ", box)

// //Three.renderer.render();

// //   console.log("THREE: ", THREE);
// //   console.log(Object.getOwnPropertyNames(THREE));
// //   type Mutable<Type> = {
// //     -readonly [Key in keyof Type]: Type[Key];
// //   };
// //   const _Scene: Mutable<Scene> = new Scene();
// //   console.log("Scene but mutable: ", _Scene)
// //   // THREE.Scene= () = {
    
// //   // }
// // }


//   /*
//   import * as THREE from 'three';

//   const arr = [];

//   three.js method
//   three.renderer.render (scene, camera)=> {
//     return scene.render( scene, camera );
//   }


//   _three.renderer.render = three.renderer.render

//   three.renderer.render = () => {
//     arr.push(this method log)
//     return _three.renderer.render();
//   }

//   index.js = {
//     three.renderer.render(scene, camera);
//   }

//   import * as THREE from 'three';

//   function threeJsWrapper() {
//     loop three.js methods

//       _three.method = three.method

//       three.method = () => {
//         arr.push(`${three.method}`);
//         _three.method();
//       }
//   }

//   threeJsWrapper();

//   ...

//   when we load panel.html => panel.js looksinto the arr[] and renders all that information
//   on the document as components

//   //index.js is front end script ran by index.html
//   when index.js calls obj.getNum, it console logs num and then returns num

//   index.js needs to call proxy.getNum


//   */





//   // console.log('DOCUMENT', document);

//   // let page = document.getElementsByTagName('canvas')[0];
  
//   // const handlers = {
//   //   get(page: HTMLCanvasElement, key: keyof typeof page) { 
//   //     console.log("HERE: ", key);
//   //     return page[key] 
//   //   }
//   //   // set: (page: HTMLCanvasElement, key: keyof typeof page, value: any) => {
//   //   //   console.log(Object.getOwnPropertyDescriptor(page, 'ATTRIBUTE_NODE'))
//   //   //   type Mutable<Type> = {
//   //   //     -readonly [key in keyof Type]: Type[key];
//   //   //   }
//   //   //   type MutablePage = Mutable<typeof page>;
//   //   //   if (key in page) {
//   //   //     page[key] = value;
//   //   //   }
//   //   //   return value;
//   //   // }
//   // };

//   // const proxy1 = new Proxy(page, handlers);
//   // console.log('THIS IS OUR CANVAS: ', proxy1);

//   // console.log('HEIGHT: ', handlers.get(proxy1, 'height'))

//   // function wrapCanvas(page: HTMLCanvasElement) {
//   //   Object.getOwnPropertyNames(page.getContext('2d')).forEach(elem => {
//   //     console.log('THIS IS OUR CANVAS PROPERTIES: ', elem);
//   //   })
//   // };

//   // if (page) {
//   //   wrapCanvas(page);
//   // }