import Image, { StaticImageData } from 'next/image'

type HomeCardProps = {
    image: StaticImageData,
    title: string
}

const HomeCard = ({ image, title }: HomeCardProps) => {
  
  return (
    <a href='#' className='container sm:col-span-1 hover:text-zinc-600'>
        <div className='flex justify-center'>
            <Image src={image} alt='Politician' />
        </div>
        <div className='flex justify-center'>
            <h1 className='text-lg font-medium text-center'>{title}</h1>
        </div>
    </a>
  )
}

export default HomeCard
