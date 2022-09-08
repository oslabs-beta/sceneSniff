type browserId = {
  tabId: number,
  frameId: number
};

type message = {
  tabId: number,
  port: chrome.runtime.Port,
  name: string
};

// Map for { Inspected Window Tab ID, and DevTool Port Number } when devtool is loaded
const connections = new Map();

/**
*Listener for the Browser and Devtool
* @param port unique number to identify sceneSniffer dev tool when loaded
*/
chrome.runtime.onConnect.addListener((port) => {
  let tabId: number;

  /**
   * When message from port is received, devtool has been loaded and we can add data to connections
   * map
   * @param message object from sceneSniffer devtool with respective inspected window tabId
   */
  const onMessage = (message: message) => {
    tabId = message.tabId;
    if (message.name === 'connect') {
      connections.set(tabId, port);
    }
  };

  port.onMessage.addListener(onMessage);

  // When connection is lost to devtool, remove from the connections map
  port.onDisconnect.addListener((portOnDisconnect) => {
    portOnDisconnect.onMessage.removeListener(onMessage);
    connections.delete(tabId);
  });
});

/**
 * When message from canvasSpy is received, communicate the data
 * to sceneSniffer
 * @param event data from inspected window
 */
chrome.runtime.onMessage.addListener((event, sender) => {
  if (sender.tab) {
    const tabId = sender.tab.id;
    if (connections.has(tabId)) {
      connections.get(tabId).postMessage(event);
    }
  }
  return true;
});

/**
 * onCommitted occurs on refresh by default
 * Whenever inspected window is refreshed, check if our @const connections has tabId stored
 * if tabId is present, send data to sceneSniffer
 */
chrome.webNavigation.onCommitted.addListener(({ tabId, frameId }: browserId): void => {
  if (frameId !== 0) return;

  if (connections.has(tabId)) {
    connections.get(tabId).postMessage({
      type: 'devtoolLoaded',
      id: 'three-dev-tools',
    });
  }
});
