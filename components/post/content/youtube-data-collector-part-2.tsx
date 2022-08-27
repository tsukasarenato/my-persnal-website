
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
        text += 'author: ' + comment['authorDisplayName'] + '\n'
        text += 'comment: ' + comment["textDisplay"].replace("\n", ". ") + '\n'
        text += 'date: ' + comment["updatedAt"] + '\n'
        text += 'like: ' + str(comment["likeCount"]) + '\n\n'

        if 'replies' in item.keys():
            replies = item["replies"]["comments"]
            text += '\nreplies: \n'

            for reply in replies:
                text += 'author: ' + reply["snippet"]['authorDisplayName'] + '\n'
                text += 'comment: ' + reply["snippet"]["textDisplay"].replace("\n", ". ") + '\n'
                text += 'date: ' + reply["snippet"]["updatedAt"] + '\n'
                text += 'like: ' + str(reply["snippet"]["likeCount"]) + '\n\n'

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
            subtitle: '',
            paragraphs: [
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
            subtitle: '',
            paragraphs: [
            ]
        }
    ]
}

export const getYoutubeDataCollectorPart2 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}