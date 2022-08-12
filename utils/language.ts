export const getNavigatorLanguage = () => {
    const language = window.navigator.language
    const locale = language != 'pt' && language != 'pt-Br' ? 'en' : 'pt'

    return locale
}

export const getLocale = () => {
  const language = window.localStorage.getItem('language')

  if (language)
    return language

  window.localStorage.setItem('language', getNavigatorLanguage())
  
  return getNavigatorLanguage()
}

export const getMenuLabels = (language: string) => {
  if (language == 'pt')
    return [
      {name: 'Início', page: '/home'}, 
      {name: 'Sobre', page: '/about'}, 
      {name: 'Postagens', page: '/posts'}
    ]
  
    return [
      {name: 'Home', page: '/home'}, 
      {name: 'About', page: '/about'}, 
      {name: 'Posts', page: '/posts'}
    ]
}