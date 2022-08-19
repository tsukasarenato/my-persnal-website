import { StaticImageData } from "next/image"
import Image from 'next/image'
import { getPostsText } from "../../utils/posts"
import PostsText from "./text"


type PostsCardProps = {
    image: StaticImageData
    title: string,
    text: string
}

const PostsCard = ({ title, text, image }: PostsCardProps) => {
  
    return (
      <div className="flex flex-row space-x-8">
        <div className="flex justify-center">
            <div className="h-72 w-96">
                <Image src={image} alt={title} />
            </div>
        </div>
        <PostsText title={title} text={text} />
      </div>
    )
  }
  
export default PostsCard
  