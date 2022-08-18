import politician from '../../public/politicianbr.jpg'
import youtube from '../../public/youtube.jpg'
import Welcome from './welcome'
import HomeCard from './card'

const Home = () => {

  const title1 = "Applying topic modeling in politicians' speeches"
  const title2 = "Collecting Youtube comments using the Youtube Data API"
  
  return (
    <div className='container mx-auto mt-8 sm:pb-28 pb-72'>
        <Welcome />
        <div className='grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 gap-20 mt-20 mb-24'>
            <HomeCard image={politician} title={title1} />
            <HomeCard image={youtube} title={title2} />
        </div>
    </div>
  )
}

export default Home
