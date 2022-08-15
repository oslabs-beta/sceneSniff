document.addEventListener('DOMContentLoaded', () => {
  console.log('DOCUMENT', document);

  let page = document.getElementsByTagName('canvas')[0];
  console.log('THIS IS OUR CANVAS: ', page);

  function wrapCanvas(page: HTMLCanvasElement) {
    Object.getOwnPropertyNames(page.getContext('2d')).forEach(elem => {
      console.log('THIS IS OUR CANVAS PROPERTIES: ', elem);
    })
  };

  if (page) {
    wrapCanvas(page);
  }
})


//window.document