import youtube from '../../../public/youtube.jpg'
import { LinkCustom } from './ultis'

const codes = [
`
pip install --upgrade google-api-python-client
pip install --upgrade google-auth-oauthlib google-auth-httplib2
`,
`
import googleapiclient.discovery
my_api_key = 'YOUR KEY HERE' # Remember to paste your key here
api_service_name = ‘youtube’
api_version = ‘v3’
youtube = googleapiclient.discovery.build(
    api_service_name, api_version, developerKey = my_api_key)`,
`
def collect_video_data(q, y):
"""
This function collects data from YouTube videos
:param q: words used to search for videos on Youtube
:param y: year
:return: Returns data from searched YouTube videos
"""
results = youtube.search().list(
    part='snippet',
    q=q,
    type='video',
    publishedAfter=y+'-01-01T00:00:00Z',
    publishedBefore=y+'-12-31T00:00:00Z',
    order='viewCount',
    maxResults=50
            ).execute()
print('50 videos returned')
return results
`,
`
def collect_video_data(q, y):
    """
    This function collects data from YouTube videos
    :param q: words used to search for videos on Youtube
    :param y: year
    :return: Returns data from searched YouTube videos
    """
    results = youtube.search().list(
        part='snippet',
        q=q,
        type='video',
        publishedAfter=y+'-01-01T00:00:00Z',
        publishedBefore=y+'-12-31T00:00:00Z',
        order='viewCount',
        maxResults=50
                ).execute()
    print('50 videos returned')
    return results
            
`
,`
{
    ;kind;: ;youtube#searchResult;,
    ;etag;:
    ;;p4VTdlkQv3HQeTEaXgvLePAydmU/EJxKkgAmsuSsRl9cVoyWW8iBneY;;,
    ;id;: {;kind;: ;youtube#video;, ;videoId;: ;VIDEO ID;},
    ;snippet;: {;publishedAt;: ;2018-10-05T11:00:09.000Z;, ;channelId;: ;UC-
    6xqzMBF2CXTImn_a4aCVg;, ;title;: ;TITLE;, ;description;:DESCRIPTION.;,
    ;thumbnails;: {;default;: {;url;: ;IMAGE.jpg;,
    ;width;: 120, ;height;: 90}, ;medium;: {;url;:
    ;IMAGE.jpg;, ;width;: 320, ;height;: 180},
    ;high;: {;url;: ;IMAGE.jpg;, ;width;: 480,
    ;height;: 360}}, ;channelTitle;: ;CHANNEL;, ;liveBroadcastContent;: ;none;}
}
`,
`
def format_information(video_list, name):
    """
    This function formats the information of the collected videos and writes them to a JSON file
    :param video_list: Youtube video data
    :param name: name of the JSON file
    :return: JSON file
    """
    text = '['
    for video in video_list['items']:
        info = video['id']
        text += '{\n'
        text += '"' + 'ID": ' + '"' + str(info['videoId']) + '",\n'
        info = video['snippet']
        text += '"' + 'Title": ' + '"' + str(info['title']) + '",\n'
        text += '"' + 'Channel": ' + '"' + str(info['channelTitle']) + '",\n'
        text += '"' + 'Date": ' + '"' + str(info['publishedAt']) + '",\n'
        text += '"' + 'Description": ' + '"' + str(info['description']) + '",\n},\n'
    text += ']'
    with open('database/videos/'+name+'.json', 'w', encoding="utf8") as file:
        file.write(text)
    print('Information was stored in json file')
`,
`
words = ['cs go', 'anime', 'basketball']
year = '2018'
for word in words:
    videos = collect_video_data(word, year)
    format_information(videos, word)
`
]

const post = {
    title: "Collecting Youtube comments using the Youtube Data API - Part 1",
    image: youtube,
    content:
    [
        {
            subtitle: 'Introduction',
            paragraphs: [
                <>In this article, I'll show you how to use the Youtube API to collect videos and comments 
                data.</>,

                <>Nowadays, it's common to see analyzes with Twitter data, since the 
                <LinkCustom link="https://temas.folha.uol.com.br/gps-ideologico/" text="Folha SP's ideological GPS" /> 
                to the 
                <LinkCustom link='https://politoscope.org/' text='Politoscope project in France.' />
                I also wrote about it for the 
                <LinkCustom link='https://ebicc2019.wordpress.com/' text='EBICC,' /> 
                cognitive science event 2019 at Unicamp.</>,

                <>My experience in the field is more related the politics, but you can find many uses for 
                analysis of social media. In politics, it's common to use them to measure votes' intent, 
                political compass, and to see the narrative structure, in my case, I applied the LDA algorithm 
                on Youtube comments to discover the topics more spoken during the election 2018.</>,
                
                <>An interesting point about this subject, which also is part of the goals of the Politoscope,
                is to take knowledge about how these techniques work for the general public, many people 
                already know that your data are collected, but don't know what the interested doing with 
                these data, to bring the knowledge of how these techniques work can help on the debate 
                about this subject.</>,

                <>Before start, I need to highlight some limitations, in social media exists many paid 
                profiles and robots producing fake news or artificial information that not correspond to most 
                users' real opinions, they generally are used to improve the reputation of a politician and 
                destroy the reputation of your competitor. So case you will measure the intention of votes, 
                the paid profiles and robots will influence the results.</>,

                <>Another important thing is to be beware of the methodology used because may exist other 
                implications and causes to explain your results, an example that I saw, is to use sentiment 
                analysis to measure the impact of the fake news on public opinion, the problem is that sentiment 
                not express agreement or disagreement.</>,
                
                <>For example, in a situation of tragedy is expected that most parts of the sentiment be 
                negative, but it doesn't mean that they don't believe in the occurred fact. Another example is a 
                little more polemic, occur when the public express negative sentiment with each other by thinks 
                different about a specific subject, so not is possible to distinguish one opinion from the other.</>,
                
                <>In other words, the sentiment analysis doesn't consider the content of the message, so users with 
                different opinions can be grouped into a unique sentiment.</>,

                <>If you want to read more about the challenges and difficulties of analyzing social media, you can 
                read 
                <LinkCustom link='https://sloanreview.mit.edu/article/the-pitfalls-of-using-online-and-social-data-in-big-data-analysis/' text="Renee Boucher Ferguson's article." />
                </>,
            ]
        },
        {
            subtitle: 'Generating credentials to access the API',
            paragraphs: [
                <>Now, the first thing to do is access 
                <LinkCustom link='https://console.cloud.google.com/' text="Google's developer console," /> 
                and log in using your 
                Gmail, if it's your first time you will need to accept the terms and conditions.</>,

                <>Create a project by clicking on the New Project button, in this tutorial, we'll use the 
                default information, but you can edit if want, how name, organization, etc. Then click on 
                credentials, and after it click on create credentials. Will appear some options, we'll to 
                use the most simple, select the API Key option.</>,

                <>Now, we'll active the API to access the Youtube Data API v3 service, click on dashboard, 
                and after it click on enable API and services. You'll be directed to the search page, search 
                by Youtube Data API v3, and click on this service, and after it clicks on enable.</>,

                <>You'll need to download the 
                <LinkCustom link='https://developers.google.com/youtube/v3/quickstart/python' 
                    text="API's library" /> 
                on your machine, to do it types:</>,

                codes[0],

                <>You're now ready to use the API, create a file, and import the library in your code, 
                types:</>,

                codes[1],
            ]
        },
        {
            subtitle: 'Create a function to collect video data',
            paragraphs: [
                <>Type and observe the following p:</>,

                codes[3],

                <>This function receives two parameters, the first is the word used by API to search for 
                videos on Youtube, the second is the year using by me to get videos in a specific year. The 
                second parameter I used in my research to separate the samples per year.</>,

                <>This function returns many data about the video found, if you want only some specific 
                information about the video you can set the parameter called 'part', access the 
                <LinkCustom link='https://developers.google.com/youtube/v3/docs/search/list' 
                    text='documentation,' /> 
                and look at the properties name returned by API to choose a valid value for 
                this parameter. In this case, the snippet property returns us the information that we need, 
                like title and video id.</>,

                <>The publishedAfter and the publishedBefore parameters define the period, in this case, 
                we'll look for videos published in the period for 1 Jan of 2018 to the 31 Dez of 2018. The 
                order parameter defines if the function returns the videos more seen or more relevant, this 
                parameter accepts other values, in the documentation show other valid values and what each 
                one means. I chose the more seen (viewCount) because generally, it has more comments.</>,
                
                <>The maxResults parameter defines the maximum number of data that can be returned by the 
                function, the maximum value allows is 50, but it's possible to collect more than 50 putting 
                the function in a loop, we'll do it when we collect the video's comments because the videos 
                have more comments than the maxResults' limit allow us to collect.</>,

                <>For each video that it returns, the data are following format:</>,
                
                codes[4],

                <>Now, we'll select the information that we want and put it in a JSON file.</>,

                codes[5],

                <>This is a function very simple, it selects the field names that have the information we 
                want and stores it in a string, after it we put the code in a loop to go through the list of 
                50 videos returned by the API.</>,

                <>After implementing the functions, we'll write a code to call them.</>,

                codes[6],

                <>For the purpose of demonstration, I chose three simple words about things that I like 
                as keywords.</>,

                <>The code is available on 
                <LinkCustom link='https://github.com/tsukasarenato/youtube-data-collector' text='my Github,' /> 
                so far we collect the videos data, in the next, we'll 
                collect the video's comments.</>
            ]
        }
    ]
}

const post_pt = {
    title: "Coletando comentários do Youtube usando o Youtube Data API - Parte 1",
    image: youtube,
    content:
    [
        {
            subtitle: 'Introdução',
            paragraphs: [
                <>Neste artigo, mostrarei como usar a API do YouTube para coletar dados de vídeos e 
                comentários.</>,

                <>Hoje em dia, é comum ver análises com dados do Twitter, desde o
                 <LinkCustom link="https://temas.folha.uol.com.br/gps-ideologico/" text="GPS ideológico da Folha SP" /> 
                ao 
                <LinkCustom link='https://politoscope.org/' text='projeto Politoscope na França.' /> 
                Eu também escrevi sobre isso para o 
                <LinkCustom link='https://ebicc2019.wordpress.com/' text='EBICC,' /> 
                evento de ciências cognitivas 2019 na Unicamp.</>,

                <>Minha experiência na área está mais relacionada à política, mas você pode encontrar 
                muitos usos para análise de mídias sociais. Na política, é comum usá-los para medir intenção 
                de votos, espectro político e para ver estrutura narrativa, no meu caso, apliquei o algoritmo 
                LDA nos comentários do Youtube para descobrir os tópicos mais falados durante a eleição de 
                2018.</>,

                <>Um ponto interessante sobre esse assunto, que também faz parte dos objetivos do 
                Politoscope, é levar conhecimento sobre como essas técnicas funcionam para o público em 
                geral, muitas pessoas já sabem que seus dados são coletados, mas não sabem o que os 
                interessados estão fazendo com esses dados, trazer o conhecimento de como essas técnicas 
                funcionam pode ajudar no debate sobre o assunto.</>,

                <>Antes de começar, preciso destacar algumas limitações, nas mídias sociais existem muitos 
                perfis pagos e robôs que produzem notícias falsas ou informações artificiais que não 
                correspondem às opiniões reais da maioria dos usuários, geralmente são usados para melhorar a 
                reputação de um político e destruir a reputação do seu concorrente. Assim, caso você vá medir 
                a intenção de votos, os perfis pagos e robôs vão influenciar os resultados.</>,

                <>Outra coisa importante é ficar atento à metodologia utilizada porque podem existir 
                outras implicações e causas para explicar seus resultados, um exemplo que vi, é usar a 
                análise de sentimento para medir o impacto da notícia falsa na opinião pública, o problema é 
                que sentimento não expressa acordo ou desacordo.</>,

                <>Em uma situação de tragédia por exemplo é esperado que a maior parte do sentimento seja 
                negativo, mas esse sentimento não indica que quem o expressou não acredita que o fato 
                ocorreu, Outro exemplo é um pouco mais polêmico, ocorre quando o público expressa 
                sentimentos negativos entre si por pensar diferente sobre um assunto específico, portanto 
                não é possível distinguir uma opinião da outra.</>,

                <>Em outras palavras, a análise de sentimento não leva em consideração o conteúdo da 
                mensagem, então usuários com opiniões diferentes podem ser agrupados em um sentimento 
                único.</>,

                <>Se você quiser ler mais sobre os desafios e dificuldades da análise de mídia social, 
                você pode ler o 
                <LinkCustom link='https://sloanreview.mit.edu/article/the-pitfalls-of-using-online-and-social-data-in-big-data-analysis/' text="artigo de Renee Boucher Ferguson." />
                </>,
            ]
        },
        {
            subtitle: 'Gerando credenciais para acessar a API',
            paragraphs: [
                <>Agora, a primeira coisa a fazer é acessar o 
                <LinkCustom link='https://console.cloud.google.com/' 
                text="console do desenvolvedor do Google," /> 
                e fazer login usando o seu Gmail. Se for a primeira vez, você precisará aceitar os termos e 
                condições.</>,

                <>Crie um projeto clicando no botão Novo Projeto, neste tutorial usaremos as informações 
                padrão, mas você pode editar se quiser, como nome, organização, etc. Em seguida, clique em 
                credenciais, e depois clique em criar credenciais. Irão aparecer algumas opções, vamos usar 
                a mais simples, selecione a opção Chave de API.</>,

                <>Depois de criar a chave, vá para o dashboard (painel) e clique em enable APIs and 
                services (ativar APIs e serviços), lá você verá um campo para pesquisa APIs e serviço, 
                procure por Youtube Data Api, clique nele e pronto.</>,

                <>Você precisará baixar a 
                <LinkCustom link='https://developers.google.com/youtube/v3/quickstart/python' 
                    text="biblioteca da API" />
                em sua máquina, para fazer isso digite no 
                terminal:</>,

                codes[0],

                <>Agora você está pronto para usar a API, crie um arquivo e importar a biblioteca em seu 
                código, digite:</>,

                codes[1],
            ]
        },
        {
            subtitle: 'Crie uma função para coletar dados de vídeo',
            paragraphs: [
                <>Digite e observe o seguinte código:</>,

                codes[3],
                
                <>Esta função recebe dois parâmetros, o primeiro é a palavra usada pela API para busca de 
                vídeos no Youtube, o segundo é o ano que utilizo para obter vídeos em um ano específico. O 
                segundo parâmetro que usei em minha pesquisa para separar as amostras por ano.</>,

                <>Esta função retorna muitos dados sobre o vídeo encontrado, se você quiser apenas 
                algumas informações específicas sobre o vídeo você pode definir o parâmetro chamado 'parte', 
                acesse a 
                <LinkCustom link='https://developers.google.com/youtube/v3/docs/search/list' 
                    text='documentação,' /> 
                e olhe o nome das propriedades retornadas pela API para escolher um 
                valor válido para este parâmetro. Nesse caso, a propriedade snippet nos retorna as 
                informações de que precisamos, como título e id do vídeo.</>,
                
                <>Os parâmetros publishedAfter e publishedBefore definem o período, neste caso, 
                procuraremos os vídeos publicados no período de 1 de janeiro de 2018 a 31 de dezembro de 
                2018. O parâmetro order define se a função retorna os vídeos mais vistos ou mais relevantes, 
                este parâmetro aceita outros valores, na documentação mostra outros valores válidos e o que 
                cada um significa. Escolhi o mais visto (viewCount) porque geralmente tem mais comentários.</>,
                
                <>O parâmetro maxResults define o número máximo de dados que podem ser retornados pela 
                função, o valor máximo permitido é 50, mas é possível coletar mais de 50 colocando a função 
                em um loop, faremos isso quando coletarmos os comentários do vídeo porque os vídeos têm 
                mais comentários do que o limite de maxResults nos permite coletar.</>,
                
                <>Para cada vídeo que ele retorna, os dados estão no seguinte formato:</>,
                
                codes[4],
                
                <>Agora, vamos selecionar as informações que queremos e colocá-las em um arquivo JSON.</>,
                
                codes[5],
                
                <>Esta é uma função muito simples, ela seleciona os nomes dos campos que possuem as 
                informações que desejamos e armazena em uma string, após isso colocamos o código em um loop 
                para percorrer a lista de 50 vídeos retornados pela API.</>,
                
                <>Depois de implementar as funções, escreveremos um código para chamá-las.</>,
                
                codes[6],

                <>Para fins de demonstração, escolhi três palavras simples sobre coisas que gosto como 
                palavras-chave.</>,

                <>O código está disponível no 
                <LinkCustom link='https://github.com/tsukasarenato/youtube-data-collector' text='meu Github,' />  
                até agora coletamos os dados dos vídeos, na 
                próxima coletaremos os comentários dos vídeos.</>
            ]
        }
    ]
}


export const getYoutubeDataCollectorPart1 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}