import { StaticImageData } from "next/image"
import Image from 'next/image'
import PostsText from "./text"
import Link from "next/link"


type PostsCardProps = {
    image: StaticImageData
    title: string,
    text: string
    locale?: string
    page: string
}

const PostsCard = ({ title, text, image, locale, page }: PostsCardProps) => {

  return (
    <Link href={page} locale={locale}>
      <a className="flex flex-col mx-2 lg:flex-row sm:space-x-8 lg:h-60 lg:p-2 hover:bg-slate-300 overflow-y-hidden">
        <div className="flex justify-center">
            <div className="lg:h-72 lg:w-96">
                <Image src={image} alt={title} />
            </div>
        </div>
        <PostsText title={title} text={text} />
      </a>
    </Link>
  )
}
  
export default PostsCard
  