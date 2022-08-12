import { NextPage } from 'next'
import Footer from '../components/footer'
import HeadCustom from '../components/head'
import MenuBar from '../components/menubar'

const Posts: NextPage = () => {
  
  const page = "/posts"

  return (
    <>
      <HeadCustom />
      <MenuBar page={page} />
      <h1 className="text-3xl font-bold underline">Posts</h1>
      <Footer />
    </>
  )
}

export default Posts
