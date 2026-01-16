async function afterBuildTag (tag, params) {
  const framework = this.app.waibuMpa.themes.find(t => t.name === 'bootstrap')
  await framework.method.afterBuildTag.call(this, tag, params)
  if (params.tag === 'btn') {
    params.attr.dataMdbRippleInit = true
    params.attr.dataMdbButtonInit = true
  }
  if (params.attr.tooltip) params.attr.dataMdbTooltipInit = true
  params.html = params.html
    .replaceAll('data-bs-toggle="modal"', 'data-mdb-toggle="modal" data-mdb-modal-init')
    .replaceAll('data-bs-toggle="offcanvas"', 'data-mdb-toggle="offcanvas" data-mdb-offcanvas-init')
    .replaceAll('data-bs-toggle="collapse"', 'data-mdb-toggle="collapse" data-mdb-collapse-init')
    .replaceAll('data-bs-toggle="tooltip"', 'data-mdb-toggle="tooltip" data-mdb-tooltip-init')
    .replaceAll('data-bs-toggle="dropdown"', 'data-mdb-toggle="dropdown" data-mdb-dropdown-init data-mdb-ripple-init')
    .replaceAll('data-bs-', 'data-mdb-')
  return params
}

export default afterBuildTag
