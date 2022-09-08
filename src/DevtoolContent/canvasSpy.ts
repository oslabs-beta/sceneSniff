const script = document.createElement('script');

/**  inject this text to the inspected window at the very beginning of page load.
 ThreeTarget is a new EventTarget at __THREE_DEVTOOLS__ that logs all events dispatched
 via Three.js or This devtool until the devtools is ready into an array
*/
script.text = `
(() => {

  const $devtoolsReady = Symbol('devtoolsReady');
  const $backlog = Symbol('backlog');

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
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  (script.parentNode) ? script.parentNode.removeChild(script) : null;
};

(document.head || document.documentElement).appendChild(script);

// Data is received from our files in ./BrowserContent
// Necessary middleman to communicate data from ./BrowserContent to the background
window.addEventListener('message', (eventID) => {
  chrome.runtime.sendMessage(eventID.data);
});
