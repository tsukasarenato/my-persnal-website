import { aboutText } from '../../utils/about'

const AboutText = () => {
  
  const text = aboutText()

  return (
    <>
        <div className='flex justify-center'>
            <h1 className='text-lg font-medium text-justify tracking-wide'>About me</h1>
        </div>
        <div className='flex justify-center mt-4'>
            <p className='text-base font-normal text-justify sm:tracking-wide'>{text}</p>
        </div>
    </>
  )
}

export default AboutText
