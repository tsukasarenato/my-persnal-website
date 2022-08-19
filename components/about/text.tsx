import { useRouter } from 'next/router'
import { aboutText } from './content'

const AboutText = () => {
  
  const { locale } = useRouter()
  const text: string[] = aboutText(locale)

  return (
    <>
        <div className='flex justify-center'>
            <h1 className='text-lg font-medium text-justify tracking-wide'>{text[0]}</h1>
        </div>
        <div className='flex justify-center mt-4'>
            <p className='text-base font-normal text-justify sm:tracking-wide'>{text[1]}</p>
        </div>
    </>
  )
}

export default AboutText
