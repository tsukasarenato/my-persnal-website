import politician from '../../public/politicianbr.jpg'
import youtube from '../../public/youtube.jpg'
import Welcome from './welcome'
import HomeCard from './card'

const Home = () => {

  const title1 = "Applying topic modeling in politicians' speeches"
  const title2 = "Collecting Youtube comments using the Youtube Data API"
  
  return (
    <div className='container mx-auto mt-8 pb-28'>
        <Welcome />
        <div className='grid grid-cols-2 grid-flow-col gap-20 mt-20 mb-24'>
            <HomeCard image={politician} title={title1} />
            <HomeCard image={youtube} title={title2} />
        </div>
    </div>
  )
}

export default Home
