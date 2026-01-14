async function afterBuildTag (tag, params) {
  const framework = this.app.waibuMpa.themes.find(t => t.name === 'bootstrap')
  await framework.method.afterBuildTag.call(this, tag, params)
  if (params.tag === 'btn') {
    params.attr.dataMdbRippleInit = true
  }
  if (params.attr.dataBsToggle === 'dropdown') {
    params.attr.dataMdbDropdownInit = true
    // params.attr.dataMdbRippleInit = true
    delete params.attr.dataBsToggle
  }
  if (params.attr.dataBsToggle === 'tooltip') {
    params.attr.dataMdbTooltipInit = true
  }
  if (params.attr.dataBsToggle === 'collapse') {
    params.attr.dataMdbCollapseInit = true
    params.attr.dataMdbTarget = params.attr.dataBsTarget
    delete params.attr.dataBsToggle
    delete params.attr.dataBsTarget
  }
  if (params.attr.dataBsDismiss) {
    params.attr.dataMdbDismiss = params.attr.dataBsDismiss
    delete params.attr.dataBsDismiss
  }
  if (params.attr.tooltip) params.attr.dataMdbTooltipInit = true
  params.html = params.html.replaceAll('data-bs-', 'data-mdb-')
  return params
}

export default afterBuildTag
