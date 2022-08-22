type browserId = {
  tabId: number,
  frameId: number
}


chrome.webNavigation.onCommitted.addListener(({ tabId, frameId }: browserId): void => {
  console.log('REFRESH?')
  if (frameId !== 0) return;

  console.log('FRAME OPEN')

  console.log('FRAMEID: ', frameId);
  console.log( 'TABID: ', tabId );
});