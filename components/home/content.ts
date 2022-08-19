import politician from '../../public/politicianbr.jpg'
import youtube from '../../public/youtube.jpg'


export const getHomeWelcome = (language?: string) => {
    
    if (language == 'pt')
      return `Olá pessoal, seja bem vindo ao meu site pessoal, aqui eu compartilho meu 
      conhecimento e experiência na área de tecnologia.`

    return `Hello everyone, welcome to my website here I share my knowledge and experience in the 
    technology area.`

}

export const getHomeCard = (language?: string) => {
    
    if (language == 'pt')
        return [
            {
                title: 'Aplicando algoritmos de modelagem de tópicos (LDA) nos discursos dos políticos',
                page: '/post/topic-modeling',
                image: politician
            },
            {
                title: 'Coletando comentários do Youtube usando o Youtube Data API',
                page: '/post/youtube-data-collector',
                image: youtube
            }
        ]
  
    return [
        {
            title: "Applying topic modeling in politicians' speeches",
            page: '/post/topic-modeling',
            image: politician
        },
        {
            title: 'Collecting Youtube comments using the Youtube Data API',
            page: '/post/youtube-data-collector',
            image: youtube
        }
    ]
}
