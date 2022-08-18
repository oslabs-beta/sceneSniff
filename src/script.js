
const $backlog = Symbol('backlog');
console.log('LOGGED');

const target = new class ThreeDevToolsTarget extends EventTarget {
  constructor() {
    super();
    this[$backlog] = [];
    this.addEventListener('load', e => {
        this.dispatchEvent(e);
    }, { once: true });
  }

  dispatchEvent(e) {
    console.log(e);
    this[$backlog].push(e);
  }
}

Object.defineProperty(window, '__THREE_DEVTOOLS__', {
  value: target,
});

console.log('WINDOW: ', window.__THREE_DEVTOOLS__);

console.log(document);