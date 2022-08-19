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
        <a className="flex flex-row space-x-8 h-60 p-2 hover:bg-slate-300">
          <div className="flex justify-center">
              <div className="h-72 w-96">
                  <Image src={image} alt={title} />
              </div>
          </div>
          <PostsText title={title} text={text} />
        </a>
      </Link>
    )
  }
  
export default PostsCard
  