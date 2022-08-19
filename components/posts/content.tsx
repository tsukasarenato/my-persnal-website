import politicianbr from '../../public/politicianbr.jpg'
import youtube from '../../public/youtube.jpg'

export const getPostsText = (language?: string) => {
    
    if (language == 'pt')
        return [
            {
                title: "Aplicando algoritmos de modelagem de tópicos (LDA) nos discursos dos políticos",
                text: `Esse foi o primeiro projeto em mineração de dados que trabalhei, o foco era 
                entender como essas técnicas funcionam. A técnica escolhida para ser implementada 
                foi a alocação latente de Dirichlet (LDA), essa técnica extrai tópicos de grande 
                quantidade de textos, tópicos, neste caso, é definido como um conjunto de 
                palavras-chave como {justiça, segurança, polícia}. Para mostrar uma aplicação real 
                desta técnica, minha equipe propôs usar os discursos de políticos como amostra. 
                A amostra foi dividida em duas partes, a primeira intitulada "novos políticos" 
                representando os novos políticos eleitos com o auxílio das redes sociais, e [...]`,
                image: politicianbr,
                page: '/post/topic-modeling'
            },
            {
                title: "Coletando comentários do Youtube usando o Youtube Data API",
                text: `Neste artigo, mostrarei como usar a API do YouTube para coletar dados de 
                vídeos e comentários. Hoje em dia, é comum ver análises com dados do Twitter, 
                desde o GPS ideológico da Folha SP ao projeto Politoscope na França . Eu também 
                escrevi sobre isso para o EBICC, evento de ciências cognitivas 2019 na Unicamp.
                Minha experiência na área está mais relacionada à política, mas você pode encontrar
                 muitos usos para análise de mídias sociais. Na política, é comum usá-los 
                 para medir intenção de votos, espectro político e para ver estrutura narrativa, 
                 no meu caso, apliquei o algoritmo LDA nos comentários do Youtube para descobrir 
                 os tópicos mais [...]`,
                image: youtube,
                page: '/post/youtube-data-collector'
            },    
        ]
    return [
        {
            title: "Applying topic modeling in politicians' speeches",
            text: `This was the first project in data mining that I worked, the focus was understand how 
                work this techniques. The technique chosen to be implemented was the latent Dirichlet 
                allocation (LDA), this technique extracts topics from large amount of texts, topics, 
                this case, is defined as a group of keywords such as {justice, security, police}.
                To show a real application of this technique, my team proposed to use the speeches of politicians as sample. 
                The sample was divided in two parts, the first entitled "new politicians" representing the 
                new politicians elected with the help of social media, and the [...]`,
            image: politicianbr,
            page: '/post/topic-modeling'
        },
        {
            title: "Collecting Youtube comments using the Youtube Data API",
            text: `In this article, I'll show you how to use the Youtube API to collect videos and 
            comments data. Nowadays, it's common to see analyzes with Twitter data, since the 
            Folha SP's ideological GPS to the Politoscope project in France . I also wrote about 
            it for the EBICC, cognitive science event 2019 at Unicamp. My experience in the field 
            is more related the politics, but you can find many uses for analysis of social media. 
            In politics, it's common to use them to measure votes' intent, political compass, and 
            to see the narrative structure, in my case, I applied the LDA algorithm on Youtube 
            comments to discover the topics more  [...]`,
            image: youtube,
            page: '/post/youtube-data-collector'
        },
    ]
}