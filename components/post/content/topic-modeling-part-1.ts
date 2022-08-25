import politician from '../../../public/politicianbr.jpg'

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
            {p: `This was the first project in data mining that I worked, the focus was understand how 
            work this techniques. The technique chosen to be implemented was the latent Dirichlet 
            allocation (LDA), this technique extracts topics from large amount of texts, topics, 
            this case, is defined as a group of keywords such as {justice, security, police}.`},
            {p:`To show a real application of this technique, my team proposed to use the speeches of politicians as sample. 
            The sample was divided in two parts, the first entitled "new politicians" representing the 
            new politicians elected with the help of social media, and the second entitled 
            "old politicians" representing the old politicians who weren't non-reelected, both are of 
            the right-wing.`},
            {p: `The idea was to check if the topics in each sample are the same if the topics are the 
            same then the ideas no changed, what changed was the way of communicating, if the topics 
            are different then it makes room for other hypotheses. This project currently isn't being 
            worked, there's another project in progress, that is why I decided to write about this 
            project here and use it to bring knowledge about the topic modeling algorithm. Our focus 
            is on the algorithm.`}]
    },
    {
        subtitle: 'The tools and library used',
        paragraphs: [
            {p: `The algorithm that I implemented basically has the following steps, data 
            preparation, and creation of the LDA model. Data preparation involves tokenization, 
            removal of stopwords, lemmatization, and n_grams, and the creation of the LDA model 
            involves the creation of a dictionary, a corpus, and the LDA model itself.`},
            {p: `To implement this algorithm was to used the Python language and the following libraries, 
            Gensim to create the LDA model and n_grams, Pandas to read JSON files, Gensim's 
            simple_process for the tokenization, NLTK for stopwords removal, and the Spacy for 
            lemmatization.`},
            {code: codes[0]},
            {p: `The Pycharm development environment and the Anaconda open source project were used to manage 
            the libraries.`},
            {p: `The code is inspired by this tutorial: 
            https://www.machinelearningplus.com/nlp/topic-modeling-gensim-python/. I adapted and organized 
            the code for this case study, so the code is a little different from the tutorial.`}
        ]
    },
    {
        subtitle: 'About the samples',
        paragraphs: [
            {p: `The politicians' speeches were collected on the Chamber of Deputies of Brazil website, 
            basically, I searched the candidate's name on the website and copied and pasted their speeches 
            in an external file using the mouse, then I put the data in a JSON format using Notepad++.`},
            {p: `The JSON file used in this project may be accessed in this link.`},
            {p: `Independent of the format or data you want to use, you need to convert this file in a list 
            of strings. So if you want to use this algorithm in other case studies, remember to do the 
            adaptations required.`}
        ]
    },
    {
        subtitle: 'Explaining each step of data preparation',
        paragraphs: [
            {p: `To better understand the data preparation steps, I created a fictional dialogue between two
             people and saved it to a string list variable.`},
            {code: codes[1]},
            {p: `The first step is tokenization, in this step, the list of strings is transformed into an array of strings, also numbers, punctuation, and isolated letters are removed.`},
            {code: codes[2]},
            {p: `In topic modeling is common to hear terms like words, documents and corpus, where document 
            is a set of words and the corpus is a set of documents. For the algorithm, each element of the 
            array is a word, each row of the array is a document and array is the corpus.`},
            {p: `The second step is the removal of stopwords, stopwords are common words in the language and 
            haven't relevant meaning for the formation of topics. If you don't remove the stopwords, the 
            algorithm will consider these words to form the topics, so instead of {law, police, justice} 
            the algorithm can return {as, for, justice}. After removing the stopwords, the result was:`},
            {code: codes[3]},
            {p: `The following words were removed: ‘meu’, ‘aquela’, ‘que’, ‘para’, ‘ele’, ‘muito’, ‘qual’, 
            ‘do’, ‘eu’, ‘dele’, ‘nas’, ‘você’, ‘no’, ‘meu’, ‘estava’, ‘pelas’, ‘também’, ‘um’, ‘ou’, 
            ‘aquele’, ‘com’, ‘de’. The next step is the lemmatization, see the result below:`},
            {code: codes[4]},
            {p: `The lemmatization transforms the word in its "root version", so words like 'engordou' 
            (past tense) become 'engordar' (infinitive) and 'quilos' (noun in plural) become 'quilo' 
            (noun in singular). Spacy uses statistical models to find out if a word is a verb or a noun, 
            so in some cases they fail, in this case Spacy thinks the word 'barato' (noun) is a verb, so 
            'barato' become 'baratar'. This step is important because the algorithm analyzes only the 
            syntax, not the semantic, so for example, the words dog and dogs have the same meaning, however, 
            the syntax is different, so the algorithm understands it as two words with a different meaning.`},
            {p: `The next step is the n_gram, in this step, words that often appear together are connected 
            with an underline, for example, social media becomes social_media, so the algorithm understands 
            social media as a word with the same meaning instead of two words with a different meaning. 
            This step is important for the same reason that the lemmatization.`},
            {code: codes[5]},
            {p: `The n_gram has two methods for connecting the words that appear often together, the first 
            and what we're using is the 'original_score', the second is 'npmi_score', these methods 
            calculate the score between two words, based on this score the algorithm connects the words. 
            Each method receives parameters, changing the values of these parameters can generate results 
            different, in this case, I used min_count=2 and threshold=10.`}
        ]
    },
    {
        subtitle: 'Creating a dictionary and a corpus',
        paragraphs: [
            {p: `Now with the data ready, let's create a dictionary, that is, let's assign an identifier 
            (number) for the word, then let's create a corpus, this corpus contains the word and the number 
            of times it appears in the document, see the example below.`},
            {code: codes[6]},
            {p: `Remember that each row in the matrix is a document.`},
            {code: codes[7]}
        ]
    }
]}

export const getTopicModelingPart1 = () => {
    return post
}