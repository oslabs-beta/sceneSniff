const script = document.createElement('script');
console.log('INJECTING');

//inject this text to the inspected window at the very beginning of page load.
//ThreeTarget is a new EventTarget at __THREE_DEVTOOLS__ that logs all events dispatched
//via Three.js or This devtool until the devtools is ready into an array
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
      console.log('DEV TOOL IS READY')
      this[$devtoolsReady] = true;
      for (let event of this[$backlog]) {
        console.log('DISPATCHING: ', event)
        this.dispatchEvent(event);
      }
    }, { once: true });
  }
  
  dispatchEvent(event) {
    if (this[$devtoolsReady] || event.type === 'devtools-ready') {
      console.log('AFTER READY: ', event);
      super.dispatchEvent(event);
    } else {
      console.log('BEFORE READY: ', event)
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
  ( script.parentNode ) ? script.parentNode.removeChild(script) : null;
}

( document.head || document.documentElement ).appendChild(script);


window.addEventListener('message', ( eventID ) => {
  
  //send event to the background
  chrome.runtime.sendMessage(eventID.data);
})