import politician from '../../../public/politicianbr.jpg'
import { LinkCustom } from './ultis'

const codes = [
`lda_model = gensim.models.ldamodel.LdaModel(corpus=corpus, id2word=dictionary, num_topics=5, passes=5, random_state=100, chunksize=5) 
pprint(lda_model.show_topics(num_words=10, formatted=False))
`,
`[(0, ('político', 0.048081513), ('criminoso', 0.026880478), ('dever', 0.023893056), ('homicídio', 0.020882715), ('institucional', 0.01692661), ('crime', 0.016326597), ('ministrar', 0.015666239), ('econômica_país', 0.015128006), ('grande', 0.014874312), ('infelizmente', 0.014742325)]), (1, [('lula', 0.015493604), ('temer', 0.014298427), ('dilma', 0.01354996), ('previdência', 0.013054488), ('afirmar', 0.012570059), ('ministério', 0.012504581), ('milhão', 0.012391347), ('menos', 0.012331136), ('aposentar', 0.011386282), ('engraçar', 0.010403054)]), (2, [('pobre', 0.0017235907), ('amigar', 0.0017222896), ('sistema', 0.0017211222), ('mil', 0.0017201558), ('previdência', 0.0017197804), ('pessoa', 0.0017194073), ('contar', 0.0017188233), ('vender', 0.0017185071), ('rede_social', 0.0017183989), ('pequeno', 0.0017183813)]), (3, [('oposição', 0.028073898), ('banco', 0.02438206), ('paulo_guedes', 0.020875037), ('crédito', 0.020252384), ('emendar', 0.019589188), ('econômica', 0.018525703), ('importante', 0.017117798), ('reformar', 0.01678466), ('votar', 0.014022477), ('juro', 0.0131551195)]), (4, [('mil', 0.02649151), ('brasil', 0.02524272), ('pobre', 0.024156293), ('brasileiro', 0.020558463), ('render', 0.017023748), ('pessoa', 0.016119933), ('aumentar', 0.015964374), ('taxar', 0.011877464), ('maior', 0.011803343), ('novo', 0.010375899)])`
,`(0, [('educação', 0.13055523), ('entender', 0.061123144), ('dinheiro', 0.035620566), ('pobre', 0.030588925), ('processar', 0.030102147), ('novo', 0.029336303), ('previdência', 0.023431802), ('pouco', 0.022880832), ('gigantesco', 0.020867195), ('vezar', 0.020137565)]), (1, [('criança', 0.05710421), ('gerar', 0.032897886), ('oportunidade', 0.02977146), ('jovem', 0.028608356), ('prazo', 0.022428662), ('próprio', 0.022382174), ('menino', 0.0202656), ('errar', 0.0202656), ('janeiro', 0.018091096), ('possibilidade', 0.017544733)]), (2, [('brasil', 0.06028765), ('ministrar', 0.044095278), ('precisar', 0.040082633), ('adiantar', 0.024088105), ('repetir', 0.023177613), ('vezar', 0.022684252), ('formar', 0.021048), ('fundamental', 0.020685708), ('acontecer', 0.019900924), ('reformar', 0.017469293)]), (3, [('pedir', 0.039279137), ('acordar', 0.023514247), ('importante', 0.021785323), ('oposição', 0.020121368), ('público', 0.01775515), ('pautar', 0.017023362), ('pagar', 0.015360363), ('discussão', 0.015240841), ('líder', 0.015105125), ('grande', 0.014953048)]), (4, [('técnico', 0.066543065), ('trabalhar', 0.043322824), ('equipar', 0.034722503), ('colega', 0.033332653), ('brasil', 0.031017913), ('verdade', 0.022444658), ('agora', 0.022087174), ('quebrar', 0.01860686), ('acontecer', 0.016007116), ('brasileiro', 0.015844967)])`
,`(0, [('brasil', 0.08703167), ('brasileiro', 0.056430645), ('amigo', 0.039174017), ('trabalhar', 0.03814766), ('país', 0.035935465), ('câmara', 0.033925936), ('conhecer', 0.026983958), ('orgulhar', 0.026983958), ('grande', 0.0248193), ('casar', 0.024046337)]), (1, [('poder', 0.06771855), ('orlar_silvar', 0.049369935), ('importante', 0.04916141), ('votar', 0.048867237), ('deixar', 0.048555154), ('casar', 0.045148652), ('art', 0.042274352), ('comissão', 0.035160076), ('manter', 0.032031722), ('iniciar', 0.027981322)]), (2, [('falir_sobrar', 0.041870497), ('aprovação', 0.041848816), ('passar', 0.03747961), ('emendar', 0.03692816), ('carga', 0.034437682), ('fechar', 0.034375116), ('transportar', 0.029316759), ('acordar', 0.027154697), ('plenário', 0.026985426), ('lei', 0.026955042)]), (3, [('ministério', 0.07683902), ('poder', 0.07034852), ('qualidade', 0.0531148), ('público', 0.05255442), ('dois', 0.032972936), ('tribuna', 0.026358625), ('vidar', 0.024823152), ('tamanho', 0.02482264), ('encaminhar', 0.024472887), ('município', 0.024466148)]), (4, [('feirar', 0.04614017), ('mundo', 0.031650648), ('cidade', 0.0307977), ('gostar', 0.029193563), ('ajudar', 0.028055798), ('setor', 0.026994329), ('maior', 0.026354916), ('parabém', 0.025562411), ('agricultura', 0.025562411), ('obrigar', 0.02453766)])`
,`(0, [('senador_paim', 0.016738543), ('respeitar', 0.014017984), ('direito_humano', 0.009541961), ('abortar', 0.0073826867), ('defender', 0.0069556986), ('frente', 0.0061650705), ('pensar', 0.005821343), ('ler', 0.005645813), ('democracia', 0.0054372996), ('sobrar', 0.0051015727)]), (1, [('viés_ideológico', 0.013972058), ('jair_bolsonaro', 0.013972058), ('bolsonaro', 0.011688635), ('verbalizar', 0.0094059715), ('pênis', 0.009405194), ('destruir', 0.0071217916), ('sinal', 0.0071217245), ('senador_ricardo', 0.0071217245), ('dois_vezar', 0.0071217245), ('mão_deus', 0.0071217245)]), (2, [('respeitar', 0.0008562035), ('defender', 0.0008561843), ('abortar', 0.0008558293), ('senador_paim', 0.0008556099), ('pedir', 0.00085527805), ('sobrar', 0.0008550593), ('acreditar', 0.00085497036), ('público', 0.0008549413), ('bem', 0.0008549318), ('direito_humano', 0.00085492973)]), (3, [('popularidade', 0.03139278), ('encerrar', 0.00983482), ('ratar', 0.009807387), ('reformar', 0.009807387), ('baderneiros', 0.009807387), ('pau', 0.009807387), ('dilma', 0.0067257397), ('reagir', 0.0067256307), ('amnésia', 0.0067237364), ('caos', 0.0067237364)]), (4, [('supremo', 0.011814962), ('ministrar', 0.006112738), ('ministro', 0.0061122337), ('palmar', 0.0061107674), ('mandar', 0.006002944), ('novo', 0.005159167), ('bom', 0.005089765), ('abortar', 0.0047006304), ('saquear', 0.004206529), ('pente', 0.0042051063)])`

]

const post = {
    title: "Applying topic modeling in politicians' speeches - Part 2",
    image: politician,
    content: [
        {
            subtitle: 'Still talking about data preparation',
            paragraphs: [
                <>Still talking about data preparation, this process can vary according to the 
                situation. For example, on social media, users often misspell, so you can make a 
                spell check, treat emoticons, etc. You also can improve the algorithms used on 
                tokenization, lemmatization, n_grams, etc., and to choose the sequence that you 
                would like to apply in the data.</>,

                <>For data preparation, I chose the following order, tokenization - stopwords removal - 
                lemmatization - stopwords removal - n_grams - n_grams and stopwords removal. For the 
                following reasons:</>,

                <>The stopword removal using NLTK analyzes the word&apos;s syntax and compares them with the 
                words of your stopword dictionary for deciding whether removes or not. As lemmatization 
                and the n_grams affect the word&apos;s syntax and consequently affect the results of the 
                removal I decided to remove the stopwords before them.</>,

                <>I also decided to remove stopwords after lemmatization because the Portuguese 
                language has many verb conjugations and the NLTK&apos;s dictionary doesn&apos;t include these 
                conjugations. Besides that, the NLTK&apos;s dictionary has few stopwords, so I added more 
                words to the dictionary.</>,

                <>Finally, I also removed irrelevant words after n_grams, this is a very specific case 
                that happened when I worked using the New York Times newspapers as a sample, the word 
                New York Times was repeated many times and this word has no relevant meaning for the 
                research that I was doing, so I removed them after n_grams connected the words with an 
                underscore (new_york_times).</>,

                <>Another thing about the n_grams that I didn&apos;t say is, there are two very common 
                concepts, the bigram and the trigram, at code level they are the same thing. A bigram 
                is two words that often appear together in documents, such as social media, New York, 
                etc., whereas a trigram has the same meaning, but refers to three words.</>,

                <>In my project, I added a filter called 
                <LinkCustom link='https://radimrehurek.com/gensim/corpora/dictionary.html' text='filter_extremes(),' /> 
                this filter can be used to 
                remove words based on the number of times they appear in the documents. In this case, 
                I used this filter just to test, it&apos;ll be useful to help me remove noise from the 
                collected data from another research I&apos;m doing.</>
            ]
        },
        {
            subtitle: 'Applying the latent Dirichlet allocation (LDA)',
            paragraphs: [
                <>So far, I explained how the data preparation works, explained its importance, and the 
                sequence I chose for this step. Now, I&apos;ll show and explain how the LDA algorithm works, 
                for that I&apos;ll use the politicians&apos; speeches as a sample.</>,

                <>The following speeches were used:</>,

                <>15 Joyce Hasselmann&apos;s speeches in 2019.</>,
                <>19 Kim Kataguiri&apos;s speeches in 2019.</>,
                <>13 Nelson Marquezelli&apos;s speeches in 2018.</>,
                <>4 Magno Malta&apos;s speeches in 2013, 2016, 2018.</>,
                <>Code used to create the LDA model.</>,

                codes[0]
            ]
        },
        {
            subtitle: 'Results',
            paragraphs: [
                <>Kim Kataguiri.</>,

                codes[1],

                <>Joice Hasselmann.</>,

                codes[2],

                <>Nelson Marquezelli</>,

                codes[3],

                <>Magno Malta</>,

                codes[4]
            ]
        },
        {
            subtitle: 'About the LDA model',
            paragraphs: [
                <>The algorithm groups words from documents that have a bigger probability of appearing 
                together to form the topics. Looking at the tuple list, we can see the first element is 
                the word and the second element is the probability that the word belongs to the topic, 
                also note each topic is enumerated, who&apos;ll name the topics is the user.</>,

                <>To create the LDA model you only need the corpus, about the other parameters used we 
                have: the id2word used to translate the id of the words, remember that the LDA uses 
                numbers, not strings, the num_topics define the number of topics, in this case we 
                choose a number arbitrarily, but you can use algorithms to optimize the number of 
                topics.</>,

                <>The LDA is an iterative process, it analyzes all the corpus at each iteration to 
                generate the topics discovery model, you can set the number of times that the algorithm 
                analyzes the corpus defining the parameter passes, in this case was used the default 
                value.</>,

                <>For the algorithm to be reproducible, you need set the random_state parameter, if you 
                don&apos;t set, the Gensim generates a random number at each run, in other words, generating 
                different topics at each run. Lastly, the chunksize parameter set the number of 
                documents used in each training chunk, in practice and during my work, I observed that 
                this parameter has more impact in the diversity of the topics and consequently more 
                impact in the final result. Note, use a number smaller than the number of documents in 
                your corpus.</>,

                <>More information about these parameters and others you can access the 
                <LinkCustom link='https://radimrehurek.com/gensim/models/ldamodel.html' text='Gensim documentation.' />
                </>,

                <>The LDA has some limitations, so is common get unsatisfactory results as repeated 
                topics or topics with little semantic meaning. To work around this problem 
                <LinkCustom link='https://towardsdatascience.com/thats-mental-using-lda-topic-modeling-to-investigate-the-discourse-on-mental-health-over-time-11da252259c3'
                    text='some developers change the number of topics and passes' />
                until reach a satisfactory result, 
                <LinkCustom link='https://jeriwieringa.com/2017/06/21/Calculating-and-Visualizing-Topic-Significance-over-Time-Part-1/'
                    text='other developers may want remove words less frequent and words present in more than 30%' />
                in documents.</>,

                <>To work around this problem, I generally change the chunksize and create a good 
                stopwords dictionary.</>
            ]
        }
    ]
}

const post_pt = {
    title: "Aplicando algoritmos de modelagem de tópicos nos discursos dos políticos - Part 2",
    image: politician,
    content: [
        {
            subtitle: 'Ainda falando sobre preparação de dados',
            paragraphs: [
                <>Ainda falando em preparação de dados, esse processo pode variar de acordo com a 
                situação. Por exemplo, nas mídias sociais, os usuários costumam escrever errado, então 
                você pode fazer uma correção ortográfica, tratar emoticons, etc. Você também pode 
                aprimorar os algoritmos usados na tokenização, lematização, n_grams, etc., e escolher 
                a sequência que você gostaria de aplicar nos dados.</>,

                <>Para fazer o tratamento de dado eu escolhi a seguinte ordem, tokenização - remoção de 
                stopwords - lematização - remoção de stopwords - n_grams - n_grams e remoção de 
                stopwords. Pelas seguintes razões:</>,

                <>A remoção de stopwords usando NLTK analisa a sintaxe da palavra e as compara com as 
                palavras de seu dicionário de stopword para decidir se remove ou não. A lematização e 
                os n_grams afetam a sintaxe da palavra e, consequentemente, afetam os resultados da 
                remoção, então decidi remover as stopwords antes delas.</>,

                <>Também decidi remover as palavras irrelevantes após a lematização porque a língua 
                portuguesa tem muitas conjugações verbais e o dicionário do NLTK não inclui essas 
                conjugações. Além disso, o dicionário do NLTK tem poucas palavras irrelevantes, então 
                adicionei mais palavras ao dicionário.</>,

                <>Por último, também removi stopwords após n_grams, este é um caso muito específico que 
                aconteceu quando trabalhei usando os jornais do New York Times como amostra, a palavra 
                New York Times foi repetida muitas vezes sendo que esta palavra não tem significado 
                relevante para a pesquisa que estava fazendo, então eu os removi depois dos n_grams 
                conectar as palavras com um sublinhado (new_york_times).</>,

                <>Outra coisa sobre os n_grams que eu não disse é que existem dois conceitos muito 
                comuns, o bigram e o trigram, em nível de código eles são a mesma coisa. Um bigram 
                são duas palavras que frequentemente aparecem juntas nos documentos, como mídia social, 
                Nova York, etc., enquanto um trigram tem o mesmo significado, mas se refere a três 
                palavras.</>,

                <>No meu projeto, adicionei um filtro chamado
                <LinkCustom link='https://radimrehurek.com/gensim/corpora/dictionary.html' 
                    text='filter_extremes(),' />  
                esse filtro pode ser 
                usado para remover palavras baseadas no número de vezes que aparecem nos documentos. 
                Nesse caso, usei esse filtro apenas para testar, vai ser útil para me ajudar a remover 
                ruídos dos dados coletados de outra pesquisa que estou fazendo.</>
            ]
        },
        {
            subtitle: 'Aplicando o latent Dirichlet allocation (LDA)',
            paragraphs: [
                <>Até agora, expliquei como funciona a preparação dos dados, expliquei sua importância 
                e a sequência que escolhi para esta etapa. Agora, vou mostrar e explicar como funciona 
                o algoritmo LDA, para isso usarei os discursos dos políticos como amostra.</>,

                <>Para esse trabalho eu tenho como amostra os seguintes discursos:</>,

                <>15 discursos de Joyce Hasselmann em 2019.</>,
                <>19 discursos de Kim Katagui em 2019.</>,
                <>13 discursos de Nelson Marquezelli em 2018.</>,
                <>4 discursos de Magno Malta em 2013, 2016, 2018.</>,
                <>Código usado para criar o modelo LDA.</>,

                codes[0]
            ]
        },
        {
            subtitle: 'Resultados',
            paragraphs: post.content[2].paragraphs
        },
        {
            subtitle: 'Sobre os modelos gerado com o LDA gensim',
            paragraphs: [
                <>O algoritmo agrupa palavras de documentos que têm maior probabilidade de aparecerem 
                juntos para formar os tópicos. Olhando para a lista de tuplas, podemos ver que o 
                primeiro elemento é a palavra e o segundo elemento é a probabilidade de a palavra 
                pertencer ao tópico, observe também que cada tópico é enumerado, quem nomeará os 
                tópicos é o usuário.</>,

                <>Para criar o modelo LDA você só precisa do corpus, sobre os demais parâmetros nós 
                temos: o id2word usado para traduzir o id das palavras, lembre-se que o LDA usa 
                números, não strings, o num_topics define o número de tópicos, neste caso escolhemos 
                um número arbitrariamente, mas você pode usar algoritmos para otimizar o número de 
                tópicos.</>,

                <>O LDA é um processo iterativo, ele analisa todo o corpus a cada iteração para gerar o 
                modelo de descoberta de tópicos, você pode definir o número de vezes que o algoritmo 
                analisa o corpus definindo o parâmetro passes, neste caso foi utilizado o valor padrão.
                </>,

                <>Para que o algoritmo seja reproduzível, é necessário definir o parâmetro random_state, 
                se não definir, o Gensim gera um número aleatório a cada execução, ou seja, gerando 
                tópicos diferentes a cada execução. Por fim, o parâmetro chunksize define a quantidade 
                de documentos utilizados em cada trecho de treinamento, na prática e durante o meu 
                trabalho, observei que este parâmetro tem mais impacto na diversidade dos tópicos e 
                consequentemente mais impacto no resultado final. Observe, use um número menor do que o 
                número de documentos do seu corpus.</>,

                <>Mais informações sobre esses parâmetros e outros você pode acessar a 
                <LinkCustom link='https://radimrehurek.com/gensim/models/ldamodel.html' 
                    text='documentação do Gensim.' /></>,

                <>O LDA possui algumas limitações, por isso é comum obter resultados insatisfatórios 
                como tópicos repetidos ou tópicos com pouco significado semântico. Para contornar este 
                problema 
                <LinkCustom link='https://towardsdatascience.com/thats-mental-using-lda-topic-modeling-to-investigate-the-discourse-on-mental-health-over-time-11da252259c3'
                    text='alguns desenvolvedores alteram o número de tópicos e passes' />
                até chegar a um 
                resultado satisfatório, 
                <LinkCustom link='https://jeriwieringa.com/2017/06/21/Calculating-and-Visualizing-Topic-Significance-over-Time-Part-1/'
                    text='outros desenvolvedores podem querer remover palavras menos frequentes e palavras presentes em mais de 30%' /> 
                nos documentos.</>,

                <>Para contornar esse problema, geralmente altero o chunksize um bom dicionário 
                de palavras irrelevantes.</>
            ]
        }
    ]
}

export const getTopicModelingPart2 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}