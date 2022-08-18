import politician from '../../public/politicianbr.jpg'
import youtube from '../../public/youtube.jpg'
import Welcome from './welcome'
import HomeCard from './card'
import { getHomeContent } from '../../utils/translator'
import { useRouter } from 'next/router'

const Home = () => {

  const { locale } = useRouter()
  const content = getHomeContent(locale)
  
  return (
    <div className='container mx-auto mt-8 sm:pb-28 pb-72'>
        <Welcome message={content[0]} />
        <div className='grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 gap-20 mt-20 mb-24'>
            <HomeCard image={politician} title={content[1]} />
            <HomeCard image={youtube} title={content[2]} />
        </div>
    </div>
  )
}

export default Home
