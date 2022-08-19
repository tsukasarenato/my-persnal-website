import politicianbr from '../public/politicianbr.jpg'
import youtube from '../public/youtube.jpg'

export const getPostsText = () => {
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
            image: politicianbr
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
            comments to discover the topics more spoken during the election 2018. [...]`,
            image: youtube
        },
    ]
}