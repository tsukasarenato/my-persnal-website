import AboutImages from './images'
import AboutText from './text'

const AboutMobile = () => {
  
  return (
    <>
        <div className='container mx-auto mt-8 pb-96'>
          <div className='flex flex-col'>
              <div className='flex flex-col mx-4'>
                <AboutText />
              </div>
              <div className='grid grid-cols-1 grid-rows-4 mt-10 mx-4 gap-2'>
                <AboutImages />
              </div>
          </div>
        </div>
    </>
  )
}

export default AboutMobile
