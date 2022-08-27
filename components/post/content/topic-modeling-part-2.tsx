import politician from '../../../public/politicianbr.jpg'
import { LinkCustom } from './ultis'

const codes = [
`
lda_model = gensim.models.ldamodel.LdaModel(corpus=corpus, id2word=dictionary, num_topics=5, passes=5, random_state=100, chunksize=5) 
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
            subtitle: '',
            paragraphs: [

            ]
        }
    ]
}

const post_pt = {
    title: "Aplicando algoritmos de modelagem de tópicos nos discursos dos políticos - Part 2",
    image: politician,
    content: [
        {
            subtitle: '',
            paragraphs: [

            ]
        }
    ]
}

export const getTopicModelingPart2 = (language?: string) => {
    if (language == 'pt')
        return post_pt
    return post
}