import { NextPage } from 'next'
import Footer from '../components/footer/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'
import Posts from '../components/posts/posts'

const PostsPage: NextPage = () => {
  
  const page = "/posts"

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen">
        <Menu page={page} />
        <Posts />
        <Footer />
      </div>
    </>
  )
}

export default PostsPage
