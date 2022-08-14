export const getNavigatorLanguage = () => {
    const language = navigator.language
    const locale = language != 'pt' && language != 'pt-Br' ? 'en' : 'pt'

    return locale
}

export const getMenuLabels = (language?: string) => {
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