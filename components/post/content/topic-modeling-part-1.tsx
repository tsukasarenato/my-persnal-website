import politician from '../../../public/politicianbr.jpg'
import { LinkCustom } from './ultis'

const codes = [`
# Importing required libraries
import gensim
import pandas as pd
import spacy
import nltk
from gensim.corpora import Dictionary
from gensim.utils import simple_preprocess
from nltk.corpus import stopwords
from pprint import pprint

nlp = spacy.load('pt_core_news_sm') # Loading models for lemmatization in the Portuguese language
nltk.download('stopwords') # Downloading the NLTK's stopwords dictionary
stop_words = stopwords.words('portuguese') # Loading NLTK's stopwords dictionary in the Portuguese language
`,
`[' - Meu cachorro engordou uns 3 quilos, aquela nova ração que comprei para ele é muito boa. - Qual o nome do cachorro? - Max, eu postei umas fotos dele nas redes sociais uns 3 dias atrás', '- Oi, você viu o que postei no meu perfil? - Olhei, eu estava navegando pelas redes sociais também e encontrei um notebook barato', '- Ou eu comprei aquele notebook estava na promoção, a loja vendeu com 20\% de desconto.']`,
`[['meu', 'cachorro', 'engordou', 'uns', 'quilos', 'aquela', 'nova', 'ração', 'que', 'comprei', 'para', 'ele', 'muito', 'boa', 'qual', 'nome', 'do', 'cachorro', 'max', 'eu', 'postei', 'umas', 'fotos', 'dele', 'nas', 'redes', 'sociais', 'uns', 'dias', 'atrás'], ['oi', 'você', 'viu', 'que', 'postei', 'no', 'meu', 'perfil', 'olhei', 'eu', 'estava', 'navegando', 'pelas', 'redes', 'sociais', 'também', 'encontrei', 'um', 'notebook', 'barato'], ['ou', 'eu', 'comprei', 'aquele', 'notebook', 'estava', 'na', 'promoção', 'loja', 'vendeu', 'com', 'de', 'desconto']]`
,`[['cachorro', 'engordou', 'uns', 'quilos', 'nova', 'ração', 'comprei', 'boa', 'nome', 'cachorro', 'max', 'postei', 'umas', 'fotos', 'redes', 'sociais', 'uns', 'dias', 'atrás'], ['oi', 'viu', 'postei', 'perfil', 'olhei', 'navegando', 'redes', 'sociais', 'encontrei', 'notebook', 'barato'], ['comprei', 'notebook', 'promoção', 'loja', 'vendeu', 'desconto']]`
,`[['cachorro', 'engordar', 'um', 'quilo', 'novo', 'ração', 'comprar', 'bom', 'nome', 'cachorro', 'max', 'postar', 'umar', 'foto', 'rede', 'social', 'um', 'dia', 'atrás'], ['oi', 'ver', 'postar', 'perfil', 'olhar', 'navegar', 'rede', 'social', 'encontrar', 'notebook', 'baratar'], ['comprar', 'notebook', 'promoção', 'loja', 'vender', 'descontar']]`
,`[['cachorro', 'engordar', 'um', 'quilo', 'novo', 'ração', 'comprar', 'bom', 'nome', 'cachorro', 'max', 'postar', 'umar', 'foto', 'rede_social', 'um', 'dia', 'atrás', 'rede_social'], ['oi', 'ver', 'postar', 'perfil', 'olhar', 'navegar', 'rede_social', 'encontrar', 'notebook', 'baratar'], ['comprar', 'notebook', 'promoção', 'loja', 'vender', 'descontar']]`
,`[[('atrás', 1), ('bom', 1), ('cachorro', 2), ('comprar', 1), ('dia', 1), ('engordar', 1), ('foto', 1), ('max', 1), ('nome', 1), ('novo', 1), ('postar', 1), ('quilo', 1), ('ração', 1), ('rede_social', 2), ('um', 2), ('umar', 1)], [('postar', 1), ('rede_social', 1), ('baratar', 1), ('encontrar', 1), ('navegar', 1), ('notebook', 1), ('oi', 1), ('olhar', 1), ('perfil', 1), ('ver', 1)], [('comprar', 1), ('notebook', 1), ('descontar', 1), ('loja', 1), ('promoção', 1), ('vender', 1)]]`
,`
# Adding more words in the stopwords dictionary
stop_words.extend(['ir', 'aqui', 'ter', 'todo', 'fazer', 'dizer', 'falar', 'estar', 'hoje', 'algum',
'outro', 'ser',
'querer', 'qualquer', 'nado', 'porque', 'vir', 'partir', 'governar', 'deputar', 'parlamentar', 'sr',
'presidente', 'vice', 'discursar', 'parecer', 'vez', 'dar', 'ex', 'sim', 'levar', 'quase', 'chance',
'ano', 'além', 'sob', 'termo', 'sempre', 'nenhum', 'coisa', 'frase', 'diverso', 'olhar', 'exas',
'aliás', 'ficar', 'tanto', 'saber', 'colocar', 'tão', 'dia', 'senhor', 'então', 'tipo', 'lado',
'palavra', 'gente', 'apresentar', 'continuar', 'lá', 'nº', 'nome', 'exª', 'ali', 'câmara',
'comissão'])


def tokenization(texts_list):
    for text in texts_list:
        yield (gensim.utils.simple_preprocess(str(text), deacc=False))


def remove_stopwords(matrix):
    return [[word for word in simple_preprocess(str(line)) if word not in stop_words] for line in matrix]


def lemmatization(matrix):
    matrix_out = []
    for line in matrix:
        doc = nlp(" ".join(line))
        matrix_out.append([word.lemma_ for word in doc])
    return matrix_out


def n_grams(matrix):
    n_grams_model = gensim.models.Phrases(matrix, min_count=2, threshold=10)
    matrix_out = gensim.models.phrases.Phraser(n_grams_model)
    return [matrix_out[line] for line in matrix]


def create_dictionary(matrix):
    return Dictionary(matrix)


def create_corpus(id2word, matrix):
    return [id2word.doc2bow(line) for line in matrix]


df = pd.read_json('Arquivos json/KimKataguiri 2019.json', encoding="utf8")

database = df.discursos.values.tolist() # Convert from text to list

data_processing = list(tokenization(database)) # Convert in array, remove numbers, punctuation e isolated letters

data_processing = remove_stopwords(data_processing)

data_processing = lemmatization(data_processing) # Transforms the word in its "root version"

data_processing = remove_stopwords(data_processing)

data_processing = n_grams(data_processing) # Connect two words that appear often together

data_processing = n_grams(data_processing)

data_processing = remove_stopwords(data_processing)

dictionary = create_dictionary(data_processing) # Assign a ID for each word

print(len(dictionary))

dictionary.filter_extremes(no_below=2) # remove the words that appear in less than 2 documents

print(len(dictionary))

corpus = create_corpus(dictionary, data_processing)

lda_model = gensim.models.ldamodel.LdaModel(corpus=corpus, id2word=dictionary, num_topics=5, passes=5,
    random_state=100, chunksize=5)

pprint(lda_model.show_topics(num_words=10, formatted=False))

lda_model.save('LDA model/my_lda.model')
`]

const post = {
    title: "Applying topic modeling in politicians' speeches - Part 1",
    image: politician,
    content:
    [{
        subtitle: 'About this project',
        paragraphs: [
            <>This was the first project in data mining that I worked, the focus was understand how 
            work this techniques. The technique chosen to be implemented was the latent Dirichlet 
            allocation (LDA), this technique extracts topics from large amount of texts, topics, 
            this case, is defined as a group of keywords such as justice, security, police.</>,
            
            <>To show a real application of this technique, my team proposed to use the speeches of politicians as sample. 
            The sample was divided in two parts, the first entitled "new politicians" representing the 
            new politicians elected with the help of social media, and the second entitled 
            "old politicians" representing the old politicians who weren't non-reelected, both are of 
            the right-wing.</>,

            <>The idea was to check if the topics in each sample are the same if the topics are the 
            same then the ideas no changed, what changed was the way of communicating, if the topics 
            are different then it makes room for other hypotheses. This project currently isn't being 
            worked, there's another project in progress, that is why I decided to write about this 
            project here and use it to bring knowledge about the topic modeling algorithm. Our focus 
            is on the algorithm.</>
        ]
    },
    {
        subtitle: 'The tools and library used',
        paragraphs: [
            <>The algorithm that I implemented basically has the following steps, data 
            preparation, and creation of the LDA model. Data preparation involves tokenization, 
            removal of stopwords, lemmatization, and n_grams, and the creation of the LDA model 
            involves the creation of a dictionary, a corpus, and the LDA model itself.</>,

            <>To implement this algorithm was to used the Python language and the following libraries, 
            Gensim to create the LDA model and n_grams, Pandas to read JSON files, Gensim's 
            simple_process for the tokenization, NLTK for stopwords removal, and the Spacy for 
            lemmatization.</>,

            codes[0],

            <>The 
            <LinkCustom link='https://www.jetbrains.com/pycharm/' text='Pycharm' />
            development environment and the 
            <LinkCustom link='https://www.anaconda.com/' text='Anaconda' />
            open source project were used to manage the libraries.</>,

            <>The code is inspired by this tutorial: 
            <LinkCustom link='https://www.machinelearningplus.com/nlp/topic-modeling-gensim-python/' text='https://www.machinelearningplus.com/nlp/topic-modeling-gensim-python/' />
            I adapted and organized 
            the code for this case study, so the code is a little different from the tutorial.</>
        ]
    },
    {
        subtitle: 'About the samples',
        paragraphs: [
            <>The politicians' speeches were collected on the 
            <LinkCustom link='https://www.camara.leg.br/' text='Chamber of Deputies of Brazil website' />
            basically, I searched the candidate's name on the website and copied and pasted their speeches 
            in an external file using the mouse, then I put the data in a JSON format using 
            <LinkCustom link='https://notepad-plus-plus.org/downloads/' text='Notepad++' />.</>,

            <>The JSON file used in this project may be accessed 
            <LinkCustom link='https://github.com/tsukasarenato/topic-modeling' text='in this link' />
            .</>,

            <>Independent of the format or data you want to use, you need to convert this file in a list 
            of strings. So if you want to use this algorithm in other case studies, remember to do the 
            adaptations required.</>
        ]
    },
    {
        subtitle: 'Explaining each step of data preparation',
        paragraphs: [
            <>To better understand the data preparation steps, I created a fictional dialogue between two
             people and saved it to a string list variable.</>,
            
            codes[1],

            <>The first step is tokenization, in this step, the list of strings is transformed into an 
            array of strings, also numbers, punctuation, and isolated letters are removed.</>,

            codes[2],

            <>In topic modeling is common to hear terms like words, documents and corpus, where document 
            is a set of words and the corpus is a set of documents. For the algorithm, each element of the 
            array is a word, each row of the array is a document and array is the corpus.</>,

            <>The second step is the removal of stopwords, stopwords are common words in the language and 
            haven't relevant meaning for the formation of topics. If you don't remove the stopwords, the 
            algorithm will consider these words to form the topics, so instead of law, police, justice 
            the algorithm can return as, for, justice. After removing the stopwords, the result was:</>,
            
            codes[3],

            <>The following words were removed: ‘meu’, ‘aquela’, ‘que’, ‘para’, ‘ele’, ‘muito’, ‘qual’, 
            ‘do’, ‘eu’, ‘dele’, ‘nas’, ‘você’, ‘no’, ‘meu’, ‘estava’, ‘pelas’, ‘também’, ‘um’, ‘ou’, 
            ‘aquele’, ‘com’, ‘de’. The next step is the lemmatization, see the result below:</>,

            codes[4],

            <>The lemmatization transforms the word in its "root version", so words like 'engordou' 
            (past tense) become 'engordar' (infinitive) and 'quilos' (noun in plural) become 'quilo' 
            (noun in singular). Spacy uses statistical models to find out if a word is a verb or a noun, 
            so in some cases they fail, in this case Spacy thinks the word 'barato' (noun) is a verb, so 
            'barato' become 'baratar'. This step is important because the algorithm analyzes only the 
            syntax, not the semantic, so for example, the words dog and dogs have the same meaning, however, 
            the syntax is different, so the algorithm understands it as two words with a different meaning.</>,

            <>The next step is the n_gram, in this step, words that often appear together are connected 
            with an underline, for example, social media becomes social_media, so the algorithm understands 
            social media as a word with the same meaning instead of two words with a different meaning. 
            This step is important for the same reason that the lemmatization.</>,

            codes[5],

            <>The n_gram has two methods for connecting the words that appear often together, the first 
            and what we're using is the 
            <LinkCustom link='https://radimrehurek.com/gensim/models/phrases.html#gensim.models.phrases.original_scorer' text='original_score' />, 
            the second is 
            <LinkCustom link='https://radimrehurek.com/gensim/models/phrases.html#gensim.models.phrases.npmi_score' text='npmi_score' />, 
            these methods 
            calculate the score between two words, based on this score the algorithm connects the words. 
            Each method receives parameters, changing the values of these parameters can generate results 
            different, in this case, I used min_count=2 and threshold=10.</>
        ]
    },
    {
        subtitle: 'Creating a dictionary and a corpus',
        paragraphs: [
            <>Now with the data ready, let's create a dictionary, that is, let's assign an identifier 
            (number) for the word, then let's create a corpus, this corpus contains the word and the number 
            of times it appears in the document, see the example below.</>,

            codes[6],

            <>Remember that each row in the matrix is a document.</>,

            codes[7]
        ]
    }
]}

const post_pt = {
    title: "Aplicando algoritmos de modelagem de tópicos nos discursos dos políticos - Parte 1",
    image: politician,
    content:
    [{
        subtitle: 'Sobre esse projeto',
        paragraphs: [
            <>Esse foi o primeiro projeto em mineração de dados que trabalhei, o foco era entender como 
            essas técnicas funcionam. A técnica escolhida para ser implementada foi a alocação latente de 
            Dirichlet (LDA), essa técnica extrai tópicos de grande quantidade de textos, tópicos, neste 
            caso, é definido como um conjunto de palavras-chave como justiça, segurança, polícia.</>,

            <>Para mostrar uma aplicação real desta técnica, minha equipe propôs usar os discursos de 
            políticos como amostra. A amostra foi dividida em duas partes, a primeira intitulada "novos 
            políticos" representando os novos políticos eleitos com o auxílio das redes sociais, e a 
            segunda intitulada "antigos políticos" representando os antigos políticos que não foram 
            reeleitos, ambos são de direita.</>,

            <>A ideia era verificar se os tópicos de cada amostra são iguais se os tópicos são iguais 
            então as ideias não mudaram, o que mudou foi a forma de comunicar, se os tópicos são diferentes 
            então abre espaço para outras hipóteses. Este projeto atualmente não está sendo trabalhado, há 
            outro projeto em andamento, por isso decidi escrever sobre este projeto aqui e utilizá-lo para 
            trazer conhecimento sobre o algoritmo de modelagem de tópicos. Nosso foco está no algoritmo.</>
        ]
    },
    {
        subtitle: 'As ferramentas e bibliotecas usadas',
        paragraphs: [
            <>O algoritmo que implementei tem basicamente as seguintes etapas, preparação de dados e 
            criação do modelo LDA. A preparação de dados envolve tokenização, remoção de palavras 
            irrelevantes (stopwords), lematização e n_grams, e a criação do modelo LDA envolve criar 
            um dicionário, um corpus e o modelo LDA propriamente dito.</>,

            <>Para implementar este algoritmo foi utilizado a linguagem Python e as seguintes 
            bibliotecas, o Gensim para criar o modelo LDA e os n_grams, o Pandas para ler arquivos 
            JSON, o simple_process do Gensim para tokenização, o NLTK para remoção de stopwords, e o 
            Spacy para lematização.</>,
            
            codes[0],

            <>Para gerenciar as bibliotecas foi usado o ambiente de desenvolvimento 
            <LinkCustom link='https://www.jetbrains.com/pycharm/' text='Pycharm' /> e o projeto 
            de código aberto <LinkCustom link='https://www.anaconda.com/' text='Anaconda' />.</>,

            <>Os códigos são inspirado nesse tutorial: 
            <LinkCustom link='https://www.machinelearningplus.com/nlp/topic-modeling-gensim-python/' text='https://www.machinelearningplus.com/nlp/topic-modeling-gensim-python/' />
            . Eu adaptei e organizei o 
            código para este estudo de caso, então o código está um pouco diferente do tutorial.</>
        ]
    },
    {
        subtitle: 'Sobre as amostras',
        paragraphs: [
            <>Os discursos dos políticos foram coletados no 
            <LinkCustom link='https://www.camara.leg.br/' text='site da Câmara dos Deputados' />, 
            basicamente, 
            pesquisei o nome do candidato no site e copiei e colei seus discursos em um arquivo externo 
            usando o mouse, depois coloquei os dados em um formato JSON usando o 
            <LinkCustom link='https://notepad-plus-plus.org/downloads/' text='Notepad++' />.</>,

            <>O arquivo JSON usado nesse projeto pode ser acessado 
            <LinkCustom link='https://github.com/tsukasarenato/topic-modeling' text='neste link' />.</>,

            <>Independentemente do formato ou dos dados que deseja usar, é necessário converter esse 
            arquivo em uma lista de strings. Portanto, se você quiser usar esse algoritmo em outros estudos 
            de caso, lembre-se de fazer as adaptações necessárias.</>
        ]
    },
    {
        subtitle: 'Explicando cada passo da preparação de dados',
        paragraphs: [
            <>Para entendermos melhor as etapas de preparação dos dados, eu criei um diálogo fictício 
            entre duas pessoas e salvei em uma variável de lista de strings.</>,
            
            codes[1],

            <>A primeira etapa é a tokenização, nesta etapa, a lista de strings é transformada em um array de strings, 
            também são removidos números, pontuação e letras isoladas.</>,

            codes[2],

            <>Em modelagem de tópico é comum ouvir os termos, palavras, documentos, e corpus, onde 
            documentos é um conjunto de palavras e corpus um conjunto de documentos. Para o algoritmo, 
            cada elemento da matriz é uma palavra, cada linha da matriz é um documento e a matriz é o 
            corpus.</>,

            <>O segundo passo é a remoção das stopwords, stopwords são palavras comuns da linguagem e não 
            têm significado relevante para a formação dos tópicos. Se você não remover as palavras irrelevantes, 
            o algoritmo considerará essas palavras para formar os tópicos, então em vez de lei, polícia, justiça
             o algoritmo pode retornar as, para, justiça. Após a remoção das stopwords, o resultado foi:</>,

            codes[3],

            <>As seguintes palavras foram removidas: ‘meu’, ‘aquela’, ‘que’, ‘para’, ‘ele’, ‘muito’, 
            ‘qual’, ‘do’, ‘eu’, ‘dele’, ‘nas’, ‘você’, ‘no’, ‘meu’, ‘estava’, ‘pelas’, ‘também’, ‘um’, 
            ‘ou’, ‘aquele’, ‘com’, ‘de’. O próximo passo é a lematização, observe o resultado abaixo:</>,

            codes[4],

            <>A lematização transforma a palavra em sua "versão raiz", então palavras como 'engordou' se 
            tornam 'engordar' e 'quilos' se tornam 'quilo'. O Spacy usa modelos estatísticos para descobrir 
            se uma palavra é um verbo ou um substantivo, então em alguns casos, eles falham, neste caso, o 
            Spacy pensa que a palavra 'barato' é um verbo, por isso 'barato' torne-se 'baratar'. Esta etapa 
            é importante porque o algoritmo analisa apenas a sintaxe, não a semântica, então por exemplo, 
            as palavras cachorro e cachorros têm o mesmo significado, porém, a sintaxe é diferente, então 
            o algoritmo entende isso como duas palavras com um significado diferente.</>,

            <>A próximo passo é o n_gram, nesta etapa, palavras que muitas vezes aparecem juntas são 
            conectadas com um underline, por exemplo, mídia social torna-se mídia_social, então o algoritmo 
            entende mídia social como uma palavra com o mesmo significado em vez de duas palavras com 
            significado diferente. Este passo é importante pelo mesmo motivo que a lematização.</>,

            codes[5],

            <>O n_gram possui dois métodos para conectar as palavras que aparecem frequentemente juntas, 
            o primeiro e o que estamos usando é o 
            <LinkCustom link='https://radimrehurek.com/gensim/models/phrases.html#gensim.models.phrases.original_scorer' text='original_score' />, 
            o segundo é 
            <LinkCustom link='https://radimrehurek.com/gensim/models/phrases.html#gensim.models.phrases.npmi_score' text='npmi_score' />, 
            esses métodos 
            calculam a pontuação entre duas palavras, com base nessa pontuação o algoritmo conecta as 
            palavras. Cada método recebe parâmetros, alterando os valores desses parâmetros pode gerar 
            resultados diferentes, neste caso, usei min_count = 2 e threshold = 10.</>
        ]
    },
    {
        subtitle: 'Criando um dicionário e um corpus',
        paragraphs: [
            <>Agora com os dados prontos, vamos criar um dicionário, ou seja, vamos atribuir um 
            identificador (número) para a palavra, logo em seguida vamos criar um corpus, esse corpus 
            contém a palavra e a quantidade de vezes que ela aparece no documento, veja o exemplo abaixo.</>,

            codes[6],

            <>Lembre-se de que cada linha da matriz é um documento.</>,
            
            codes[7]
        ]
    }
]}

export const getTopicModelingPart1 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}