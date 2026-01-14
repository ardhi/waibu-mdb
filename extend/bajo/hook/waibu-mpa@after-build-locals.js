async function waibuMpaAfterBuildLocals ({ menu, _meta }) {
  const { findIndex } = this.app.lib._
  if (menu && menu.pages && !['/component/render'].includes(_meta.url)) {
    const idx = findIndex(menu.pages, { title: 'account' })
    if (idx > -1) menu.pages.splice(idx, 1)
  }
}

export default waibuMpaAfterBuildLocals
