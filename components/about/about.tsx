import { NextPage } from 'next'
import Image from 'next/image'
import me1 from '../../public/me1.jpg'
import me2 from '../../public/me2.jpg'
import me3 from '../../public/me3.jpg'
import profile from '../../public/profile.jpg'
import { aboutText } from '../../utils/about'

const About: NextPage = () => {
  
  const text = aboutText()

  return (
    <>
        <div className='container mx-auto mt-8 sm:pb-32 pb-72'>
          <div className='grid grid-cols-2 grid-rows-1 gap-4'>
              <div className='grid grid-cols-2 grid-rows-2 grid-flow-col gap-2'>
                <div className='flex justify-center h-72'>
                    <Image src={me1} alt="Me 1" />
                </div><div className='flex justify-center h-72 w-fit'>
                    <Image src={me2} alt="Me 2" />
                </div><div className='flex justify-center h-72'>
                    <Image src={me3} alt="Me 3" />
                </div>
                <div className='flex justify-center h-72'>
                    <Image src={profile} alt="profile" />
                </div>
              </div>
              <div className='flex flex-col my-auto mx-8'>
                <div className='flex justify-center'>
                  <h1 className='text-lg font-medium text-justify tracking-wide'>About me</h1>
                </div>
                <div className='flex justify-center mt-4'>
                  <p className='text-base font-normal text-justify tracking-wide'>{text}</p>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default About
