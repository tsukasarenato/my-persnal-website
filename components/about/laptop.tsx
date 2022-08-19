import AboutImages from './image'
import AboutText from './text'

const AboutLaptop = () => {
  
  return (
    <>
        <div className='container mx-auto mt-8 pb-32'>
          <div className='grid grid-cols-2 grid-rows-1 gap-4'>
              <div className='grid grid-cols-2 grid-rows-2 grid-flow-col gap-2'>
                <AboutImages />
              </div>
              <div className='flex flex-col my-auto mx-8 '>
                <AboutText />
              </div>
          </div>
        </div>
    </>
  )
}

export default AboutLaptop
