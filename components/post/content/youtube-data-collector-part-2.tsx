
import youtube from '../../../public/youtube.jpg'
import { LinkCustom } from './ultis'

const codes = [
`import googleapiclient.discovery`,
`
def collect_comments(video_id, page_token):
"""
This function list comments of a youtube video
:param video_id: id of the youtube video, after ?v= -> youtube.com/watch?v=video_id
:param page_token:
:return: return 100 comments
"""

my_api_key = 'your key'
api_service_name = "youtube"
api_version = "v3"

youtube = googleapiclient.discovery.build(
    api_service_name, api_version, developerKey=my_api_key)

results = youtube.commentThreads().list(
    part="snippet,replies",
    maxResults=100,
    videoId=video_id,
    textFormat="plainText",
    pageToken=page_token
).execute()

print('100 comments returned')

return results
`,
`
{'kind': 'youtube#commentThreadListResponse',
'etag': '------',
'nextPageToken': '--------',
'pageInfo': {'totalResults': 100, 'resultsPerPage': 100},
'items': [{
'kind': 'youtube#commentThread',
'etag': '-', 'id': '-------',
'snippet': {
'videoId': 'MX82C2rQSXo', 'topLevelComment': {'kind': 'youtube#comment', 'etag': '---', 'id': '---',
'snippet': {
'videoId': 'MX82C2rQSXo', 'textDisplay': "", 'textOriginal': "", 'authorDisplayName': '', 'authorProfileImageUrl': 'image', 'authorChannelUrl': '', 'authorChannelId': {
'value': 'UCOJQ9Bw2J-kYoJLp4J5apZA'}, 'canRate': True, 'viewerRating': 'none', 'likeCount': 0, 'publishedAt': '2020-02-06T13:29:59Z', 'updatedAt': '2020-02-06T13:29:59Z'}},
'canReply': True, 'totalReplyCount': 0, 'isPublic': True}},
`,
`
def write_json_file(comments, name):

    """
    This function saves comments in a txt file
    :param comments: collected comments
    :param name: name for the txt file
    :return: a txt file
    """

    text = ''

    for item in comments:

        comment = item["snippet"]["topLevelComment"]["snippet"]
        text += 'author: ' + comment['authorDisplayName'] + '\\n'
        text += 'comment: ' + comment["textDisplay"].replace("\\n", ". ") + '\\n'
        text += 'date: ' + comment["updatedAt"] + '\\n'
        text += 'like: ' + str(comment["likeCount"]) + '\\n\\n'

        if 'replies' in item.keys():
            replies = item["replies"]["comments"]
            text += '\nreplies: \n'

            for reply in replies:
                text += 'author: ' + reply["snippet"]['authorDisplayName'] + '\\n'
                text += 'comment: ' + reply["snippet"]["textDisplay"].replace("\\n", ". ") + '\\n'
                text += 'date: ' + reply["snippet"]["updatedAt"] + '\\n'
                text += 'like: ' + str(reply["snippet"]["likeCount"]) + '\\n\\n'

    with open('database/comments/' + name + '.txt', '+a', encoding="utf8") as file:
        file.write(text)

    print('Information was stored in txt file')
`,
`
videos = ['MX82C2rQSXo']

for video in videos:
   try:
       comment_data = collect_comments(video, '')
       while True:
           write_json_file(comment_data['items'], video)
           comment_data = collect_comments(video, comment_data['nextPageToken'])
   except KeyError:
       print('Comments successfully collected')
`
]

const post = {
    title: "Collecting Youtube comments using the Youtube Data API - Part 2",
    image: youtube,
    content:
    [
        {
            subtitle: 'Create a function to collect the comments',
            paragraphs: [
                <>Google's API, just like other APIs, has a limit of daily requests, to access and to 
                see your limit and to go along your use get in on 
                <LinkCustom link='https://console.cloud.google.com/' 
                text="Google's developer console" /> 
                and in 
                the page's bottom end click Youtube Data API v3, you will be directed to the API's 
                page. After it, in the sidebar menu click Quotas.</>,

                <>A video may have from 10 to more than 30 thousand comments, so worth it to take a 
                look at your daily use after using the API.</>,

                <>Now, we'll implement the function in a separate file, so let's start by importing the 
                API's library.</>,

                codes[0],

                <>After it, let's implement the function.</>,

                codes[1],

                <>The part and maxResults parameters as the same as the function that we used to 
                collect video data, just the properties change a little, you can to see these 
                properties in the 
                <LinkCustom link='https://developers.google.com/youtube/v3/docs/search/list' 
                    text='documentation.' />  
                For our case, let's use the snippet and the replies 
                that contain the message's content and the other information such as likes, published 
                date, etc.</>,

                <>I chose to collect the comment responses, to increase our samples and so we have more 
                content and keywords to analyze, this is a good thing, topic modeling work better with 
                bigger samples. The API has a technical limitation that it doesn't collect the replies 
                responses, so some times you go note that the number of comments collected is lower than 
                the video's number of comments.</>,

                <>Another parameter is the video_id, we use the video id to specify what video we'll 
                collect the comments on, this id is found after ?v= on the video's site. For example, 
                the video id of 
                <LinkCustom link='https://www.youtube.com/watch?v=bM7SZ5SBzyY&ab_channel=NoCopyrightSounds' 
                    text='https://www.youtube.com/watch?v=bM7SZ5SBzyY&ab_channel=NoCopyrightSounds' /> 
                is bM7SZ5SBzyY.</>,

                <>As we saw before, the maxResults limit the number of data returned by the function, 
                being 100 your maximum value, I commented that is possible to collect more than the 
                maximum value allows us, for this, we need the nextPageToken that is a token returned 
                by the function, this token appoints for the next page, we use it to continue off 
                where we stopped.</>
            ]
        },
        {
            subtitle: 'Storing the comments in a file',
            paragraphs: [
                <>To store the comments in a file, we'll use the same logic as we used in part 1, let's 
                select the fields we want and write it in a JSON file. For this, let's know the structure 
                of the data returned, observe below.</>,

                codes[2],

                <>The information that the user can edit such as channel name and text message are 
                divided into Original and Display, being Original the information at the time of the 
                creation and Display the information after the last update realized by the user until 
                the time of the request.</>,

                <>An important note, as the user can edit the information any time, the information 
                that we collected today can be different tomorrow, only the original information 
                remains unchanged. The updatedAt field show when was realized the last modification, 
                and the publishedAt field when was published.</>,

                <>From the information returned, we'll select the author current name 
                (authorDisplayName), the comments current text (textDisplay), last update date 
                (updateAt), and the number of likes (likeCount). Observe the function below.</>,

                codes[3]
            ]
        },
        {
            subtitle: 'Calling the functions',
            paragraphs: [
                codes[4],

                <>The page_token variable has the current page token, in start it's empty pointing for 
                the fist page, so the function return the first page of comments, after it, we use the 
                nextPageToken for the function collect next page comments, lastly we put this code that 
                is using the nexPageToken in a loop, that way it collects the comments of all the 
                pages. In last page, it returns a token invalid and raise a KeyError error, when this 
                occurs mean that there isn't next page, so the algorithm ends the loop.</>,

                <>The code is available on my github and some times I update it. Feel free to edit the 
                code adapting it the your needs.</>
            ]
        }
    ]
}

const post_pt = {
    title: "Coletando comentários do Youtube usando o Youtube Data API - Parte 2",
    image: youtube,
    content:
    [
        {
            subtitle: 'Criando uma função para coletar os comentários',
            paragraphs: [
                <>A API do Google, assim como outras APIs, tem um limite de solicitação diária, para acessar 
                e ver seu limite e acompanhar seu uso entre no 
                <LinkCustom link='https://console.cloud.google.com/' 
                text="console do desenvolvedor do Google" /> 
                e no final 
                da página clique em Youtube Data API v3, você será direcionado para a página da API.</>,

                <>Um vídeo pode ter de 10 a mais de 30 mil comentários, então vale a pena dar uma 
                olhada no seu uso diário após usar a API.</>,

                <>Agora, vamos implementar a função em um arquivo separado, então vamos começar 
                importando a biblioteca da API.</>,

                codes[0],

                <>Depois, vamos implementar a função.</>,

                codes[1],

                <>Os parâmetros part e maxResults são iguais à função que usamos para coletar dados de 
                vídeo, apenas as propriedades mudam um pouco, você pode ver essas propriedades na 
                <LinkCustom link='https://developers.google.com/youtube/v3/docs/search/list' 
                    text='documentação.' />
                Para o nosso caso, vamos usar o snippet e as respostas que contêm o 
                conteúdo da mensagem e as demais informações como curtidas, data de publicação, 
                etc.</>,

                <>Eu escolhi coletar as respostas dos comentários, para aumentar nossas amostras e 
                assim termos mais conteúdo e palavras-chave para analisar, isso é uma coisa boa, a 
                modelagem de tópicos funciona melhor com amostras maiores. A API tem uma limitação 
                técnica de não coletar as respostas das respostas, então algumas vezes você vai notar 
                que o número de comentários coletados é menor do que o número de comentários do 
                vídeo.</>,

                <>Outro parâmetro é o video_id, usamos o id do vídeo para especificar em qual vídeo 
                iremos coletar os comentários, este id é encontrado depois de ?v= no site do vídeo. 
                Por exemplo, o ID do vídeo de 
                <LinkCustom link='https://www.youtube.com/watch?v=bM7SZ5SBzyY&ab_channel=NoCopyrightSounds' 
                    text='https://www.youtube.com/watch?v=bM7SZ5SBzyY&ab_channel=NoCopyrightSounds' />
                é bM7SZ5SBzyY.</>,

                <>Como vimos antes, os maxResults limitam o número de dados retornados pela função, 
                sendo 100 seu valor máximo, comentei que é possível coletar mais do que o valor máximo 
                nos permite, para isso, precisamos do nextPageToken que é um token retornado pela 
                função, este token aponta para a próxima página, nós o usamos para continuar de onde 
                paramos.</>
            ]
        },
        {
            subtitle: 'Armazenando os comentários em um arquivo',
            paragraphs: [
                <>Para armazenar os comentários em um arquivo, usaremos a mesma lógica que usamos na 
                parte 1, vamos selecionar os campos que queremos e escrevê-los em um arquivo JSON. 
                Para isso, vamos conhecer a estrutura dos dados retornados, observe a seguir.</>,

                codes[2],

                <>As informações que o usuário pode editar como nome do canal e mensagem de texto são 
                divididas em Original e Display, sendo Original as informações no momento da criação e 
                Display as informações após a última atualização realizada pelo usuário até o momento 
                da solicitação.</>,

                <>Uma observação importante, como o usuário pode editar as informações a qualquer 
                momento, as informações que coletamos hoje podem ser diferentes amanhã, apenas as 
                informações originais permanecem inalteradas. O campo updatedAt mostra quando foi 
                realizada a última modificação, e o campo publishedAt quando foi publicado.</>,

                <>A partir das informações retornadas, selecionaremos o nome atual do autor 
                (authorDisplayName), o texto atual dos comentários (textDisplay), a data da última 
                atualização (updateAt) e o número de curtidas (likeCount). Observe a função abaixo.</>,

                codes[3]
            ]
        },
        {
            subtitle: 'Chamando as funções',
            paragraphs: [
                codes[4],

                <>A variável page_token possui o token da página atual, no início está vazio apontando 
                para a primeira página, então a função retorna a primeira página de comentários, depois 
                disso, usamos o nextPageToken para a função coletar os comentários da próxima página, 
                por último colocamos este código que está usando o nexPageToken em um loop, dessa forma 
                ele coleta os comentários de todas as páginas. Na última página, ele retorna um token 
                inválido e levanta um erro KeyError, quando isso ocorre significa que não há próxima 
                página, então o algoritmo finaliza o loop.</>,

                <>O código está disponível no meu github e algumas vezes eu o atualizo. Sinta-se à 
                vontade para editar o código adaptando-o às suas necessidades.</>
            ]
        }
    ]
}

export const getYoutubeDataCollectorPart2 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}