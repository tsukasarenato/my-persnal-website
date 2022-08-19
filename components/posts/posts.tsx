import PostsCard from "./card"
import { getPostsText } from "../../utils/posts"

const Posts = () => {

  const posts = getPostsText()
  
  return (
    <div className="container mx-auto">
        <div className="grid grid-rows-2 grid-cols-1 gap-4 mt-10 ml-20 pb-32">
            {posts.map(post => (<PostsCard title={post.title} text={post.text} image={post.image} key={post.title} />))}
        </div>
    </div>
  )
}

export default Posts
