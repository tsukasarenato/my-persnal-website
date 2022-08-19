import Welcome from './welcome'
import HomeCard from './card'
import { useRouter } from 'next/router'
import { getHomeCard, getHomeWelcome } from './content'

const Home = () => {

  const { locale } = useRouter()
  const welcome = getHomeWelcome(locale)
  const cards = getHomeCard(locale)
  
  return (
    <div className='container mx-auto mt-8 sm:pb-28 pb-72'>
        <Welcome message={welcome} />
        <div className='grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 gap-20 mt-20 mb-24'>
          {cards.map(card => (
            <HomeCard image={card.image} title={card.title} page={card.page} locale={locale} key={card.title} />
          ))}
        </div>
    </div>
  )
}

export default Home
