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

export const getFooterLabels = (language?: string) => {
  if (language == 'pt')
    return ["Minhas mídias sociais", "Meu portfolio", "Contate-me"]
  return ["My social medias", "My portfolio", "Contact me"]
}

export const getHomeContent = (language?: string) => {
  if (language == 'pt')
    return ["Olá pessoal, seja bem vindo ao meu site pessoal, aqui eu compartilho meu conhecimento e experiência na área de tecnologia.",
    "Aplicando algoritmos de modelagem de tópicos (LDA) nos discursos dos políticos",
    "Coletando comentários do Youtube usando o Youtube Data API"]

  return ["Hello everyone, welcome to my website here I share my knowledge and experience in the technology area.",
  "Applying topic modeling in politicians' speeches",
  "Collecting Youtube comments using the Youtube Data API"]
}
