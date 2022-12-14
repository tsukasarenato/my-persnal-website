
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
            text += '\\nreplies: \\n'

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
                <>Google&apos;s API, just like other APIs, has a limit of daily requests, to access and to 
                see your limit and to go along your use get in on 
                <LinkCustom link='https://console.cloud.google.com/' 
                text="Google's developer console" /> 
                and in 
                the page&apos;s bottom end click Youtube Data API v3, you will be directed to the API&apos;s 
                page. After it, in the sidebar menu click Quotas.</>,

                <>A video may have from 10 to more than 30 thousand comments, so worth it to take a 
                look at your daily use after using the API.</>,

                <>Now, we&apos;ll implement the function in a separate file, so let&apos;s start by importing the 
                API&apos;s library.</>,

                codes[0],

                <>After it, let&apos;s implement the function.</>,

                codes[1],

                <>The part and maxResults parameters as the same as the function that we used to 
                collect video data, just the properties change a little, you can to see these 
                properties in the 
                <LinkCustom link='https://developers.google.com/youtube/v3/docs/search/list' 
                    text='documentation.' />  
                For our case, let&apos;s use the snippet and the replies 
                that contain the message&apos;s content and the other information such as likes, published 
                date, etc.</>,

                <>I chose to collect the comment responses, to increase our samples and so we have more 
                content and keywords to analyze, this is a good thing, topic modeling work better with 
                bigger samples. The API has a technical limitation that it doesn&apos;t collect the replies 
                responses, so some times you go note that the number of comments collected is lower than 
                the video&apos;s number of comments.</>,

                <>Another parameter is the video_id, we use the video id to specify what video we&apos;ll 
                collect the comments on, this id is found after ?v= on the video&apos;s site. For example, 
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
                <>To store the comments in a file, we&apos;ll use the same logic as we used in part 1, let&apos;s 
                select the fields we want and write it in a JSON file. For this, let&apos;s know the structure 
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

                <>From the information returned, we&apos;ll select the author current name 
                (authorDisplayName), the comments current text (textDisplay), last update date 
                (updateAt), and the number of likes (likeCount). Observe the function below.</>,

                codes[3]
            ]
        },
        {
            subtitle: 'Calling the functions',
            paragraphs: [
                codes[4],

                <>The page_token variable has the current page token, in start it&apos;s empty pointing for 
                the fist page, so the function return the first page of comments, after it, we use the 
                nextPageToken for the function collect next page comments, lastly we put this code that 
                is using the nexPageToken in a loop, that way it collects the comments of all the 
                pages. In last page, it returns a token invalid and raise a KeyError error, when this 
                occurs mean that there isn&apos;t next page, so the algorithm ends the loop.</>,

                <>The code is available on my github and some times I update it. Feel free to edit the 
                code adapting it the your needs.</>
            ]
        }
    ]
}

const post_pt = {
    title: "Coletando coment??rios do Youtube usando o Youtube Data API - Parte 2",
    image: youtube,
    content:
    [
        {
            subtitle: 'Criando uma fun????o para coletar os coment??rios',
            paragraphs: [
                <>A API do Google, assim como outras APIs, tem um limite de solicita????o di??ria, para acessar 
                e ver seu limite e acompanhar seu uso entre no 
                <LinkCustom link='https://console.cloud.google.com/' 
                text="console do desenvolvedor do Google" /> 
                e no final 
                da p??gina clique em Youtube Data API v3, voc?? ser?? direcionado para a p??gina da API.</>,

                <>Um v??deo pode ter de 10 a mais de 30 mil coment??rios, ent??o vale a pena dar uma 
                olhada no seu uso di??rio ap??s usar a API.</>,

                <>Agora, vamos implementar a fun????o em um arquivo separado, ent??o vamos come??ar 
                importando a biblioteca da API.</>,

                codes[0],

                <>Depois, vamos implementar a fun????o.</>,

                codes[1],

                <>Os par??metros part e maxResults s??o iguais ?? fun????o que usamos para coletar dados de 
                v??deo, apenas as propriedades mudam um pouco, voc?? pode ver essas propriedades na 
                <LinkCustom link='https://developers.google.com/youtube/v3/docs/search/list' 
                    text='documenta????o.' />
                Para o nosso caso, vamos usar o snippet e as respostas que cont??m o 
                conte??do da mensagem e as demais informa????es como curtidas, data de publica????o, 
                etc.</>,

                <>Eu escolhi coletar as respostas dos coment??rios, para aumentar nossas amostras e 
                assim termos mais conte??do e palavras-chave para analisar, isso ?? uma coisa boa, a 
                modelagem de t??picos funciona melhor com amostras maiores. A API tem uma limita????o 
                t??cnica de n??o coletar as respostas das respostas, ent??o algumas vezes voc?? vai notar 
                que o n??mero de coment??rios coletados ?? menor do que o n??mero de coment??rios do 
                v??deo.</>,

                <>Outro par??metro ?? o video_id, usamos o id do v??deo para especificar em qual v??deo 
                iremos coletar os coment??rios, este id ?? encontrado depois de ?v= no site do v??deo. 
                Por exemplo, o ID do v??deo de 
                <LinkCustom link='https://www.youtube.com/watch?v=bM7SZ5SBzyY&ab_channel=NoCopyrightSounds' 
                    text='https://www.youtube.com/watch?v=bM7SZ5SBzyY&ab_channel=NoCopyrightSounds' />
                ?? bM7SZ5SBzyY.</>,

                <>Como vimos antes, os maxResults limitam o n??mero de dados retornados pela fun????o, 
                sendo 100 seu valor m??ximo, comentei que ?? poss??vel coletar mais do que o valor m??ximo 
                nos permite, para isso, precisamos do nextPageToken que ?? um token retornado pela 
                fun????o, este token aponta para a pr??xima p??gina, n??s o usamos para continuar de onde 
                paramos.</>
            ]
        },
        {
            subtitle: 'Armazenando os coment??rios em um arquivo',
            paragraphs: [
                <>Para armazenar os coment??rios em um arquivo, usaremos a mesma l??gica que usamos na 
                parte 1, vamos selecionar os campos que queremos e escrev??-los em um arquivo JSON. 
                Para isso, vamos conhecer a estrutura dos dados retornados, observe a seguir.</>,

                codes[2],

                <>As informa????es que o usu??rio pode editar como nome do canal e mensagem de texto s??o 
                divididas em Original e Display, sendo Original as informa????es no momento da cria????o e 
                Display as informa????es ap??s a ??ltima atualiza????o realizada pelo usu??rio at?? o momento 
                da solicita????o.</>,

                <>Uma observa????o importante, como o usu??rio pode editar as informa????es a qualquer 
                momento, as informa????es que coletamos hoje podem ser diferentes amanh??, apenas as 
                informa????es originais permanecem inalteradas. O campo updatedAt mostra quando foi 
                realizada a ??ltima modifica????o, e o campo publishedAt quando foi publicado.</>,

                <>A partir das informa????es retornadas, selecionaremos o nome atual do autor 
                (authorDisplayName), o texto atual dos coment??rios (textDisplay), a data da ??ltima 
                atualiza????o (updateAt) e o n??mero de curtidas (likeCount). Observe a fun????o abaixo.</>,

                codes[3]
            ]
        },
        {
            subtitle: 'Chamando as fun????es',
            paragraphs: [
                codes[4],

                <>A vari??vel page_token possui o token da p??gina atual, no in??cio est?? vazio apontando 
                para a primeira p??gina, ent??o a fun????o retorna a primeira p??gina de coment??rios, depois 
                disso, usamos o nextPageToken para a fun????o coletar os coment??rios da pr??xima p??gina, 
                por ??ltimo colocamos este c??digo que est?? usando o nexPageToken em um loop, dessa forma 
                ele coleta os coment??rios de todas as p??ginas. Na ??ltima p??gina, ele retorna um token 
                inv??lido e levanta um erro KeyError, quando isso ocorre significa que n??o h?? pr??xima 
                p??gina, ent??o o algoritmo finaliza o loop.</>,

                <>O c??digo est?? dispon??vel no meu github e algumas vezes eu o atualizo. Sinta-se ?? 
                vontade para editar o c??digo adaptando-o ??s suas necessidades.</>
            ]
        }
    ]
}

export const getYoutubeDataCollectorPart2 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}