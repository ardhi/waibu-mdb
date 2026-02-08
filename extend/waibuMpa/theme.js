async function theme () {
  return {
    name: 'mdb',
    css: [
      'waibuMdb.virtual:/mdb/css/mdb.min.css',
      'waibuMdb.virtual:/roboto/300.css',
      'waibuMdb.virtual:/roboto/400.css',
      'waibuMdb.virtual:/roboto/500.css',
      'waibuMdb.virtual:/roboto/700.css',
      '$waibuMdb.asset:/css/mdb.css'
    ],
    scripts: ['waibuMdb.virtual:/mdb/js/mdb.umd.min.js'],
    cssExcludes: ['waibuBootstrap.virtual:/bootstrap/css/bootstrap.min.css'],
    scriptsExcludes: ['waibuBootstrap.virtual:/bootstrap/js/bootstrap.bundle.min.js'],
    links: [],
    framework: 'bootstrap'
  }
}

export default theme
