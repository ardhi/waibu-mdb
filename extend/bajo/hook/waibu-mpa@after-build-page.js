async function waibuMpaAfterBuildPage ({ $, theme, req }) {
  if (req.darkMode && theme.name === 'mdb') $('body').attr('data-mdb-theme', 'dark')
}

export default waibuMpaAfterBuildPage
