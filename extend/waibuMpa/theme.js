async function theme (ctx) {
  return {
    name: 'mdb',
    css: [
      'waibuMdb.virtual:/mdb/css/mdb.min.css',
      '$waibuMdb.asset:/css/mdb.css'
    ],
    scripts: ['waibuMdb.virtual:/mdb/js/mdb.umd.min.js'],
    cssExcludes: ['waibuBootstrap.virtual:/bootstrap/css/bootstrap.min.css'],
    scriptsExcludes: ['waibuBootstrap.virtual:/bootstrap/js/bootstrap.bundle.min.js'],
    links: [
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
    ],
    framework: 'bootstrap'
  }
}

export default theme
