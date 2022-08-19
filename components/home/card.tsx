import Image, { StaticImageData } from 'next/image'
import Link from "next/link"

type HomeCardProps = {
    image: StaticImageData,
    title: string
    locale?: string,
    page: string
}

const HomeCard = ({ image, title, locale, page }: HomeCardProps) => {
  
  return (
    <Link href={page} locale={locale}>
      <a className='container sm:col-span-1 hover:text-zinc-600'>
          <div className='flex justify-center'>
              <Image src={image} alt='Politician' />
          </div>
          <div className='flex justify-center'>
              <h1 className='text-lg font-medium text-center'>{title}</h1>
          </div>
      </a>
    </Link>
  )
}

export default HomeCard
