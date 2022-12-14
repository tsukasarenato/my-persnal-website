import { useRouter } from "next/router"
import PostsCard from "./card"
import { getPostsText } from "./content"

const Posts = () => {

  const { locale } = useRouter()
  const posts = getPostsText(locale)
  
  
  return (
    <div className="container mx-auto">
        <div className="grid grid-rows-2 grid-cols-1 gap-8 mt-10 pb-96 lg:ml-20 sm:pb-40">
            {posts.map(post => (<PostsCard title={post.title} text={post.text} image={post.image} 
              locale={locale} page={post.page} key={post.title} />))}
        </div>
    </div>
  )
}

export default Posts
