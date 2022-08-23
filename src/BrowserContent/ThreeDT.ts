
export default class ThreeDT {
    target: any

    constructor( target: any ) {
      this.target = target;

      this.target.cache = {};

      console.log('DEVTOOL LOADED')
      
      this.target.addEventListener('observe', ( e: any ) => {
        console.log('   EVENT: ', e)
        const arr = [ e.detail ]
        console.log('   EVENT ARR: ', arr[0])
        window.postMessage( e.detail.uuid ) 
      })
      this.target.addEventListener('register', ( e: any ) => {console.log('REGISTER')})
      this.target.addEventListener('select', ( e: any ) => {console.log('SELECT')})
    }
  }