/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuBlu class
   *
   * @class
   */
  class WaibuMdb extends this.app.baseClass.Base {
    constructor () {
      super(pkgName, me.app)
      this.config = {
        waibu: {
          prefix: 'mdb'
        }
      }
    }
  }

  return WaibuMdb
}

export default factory
