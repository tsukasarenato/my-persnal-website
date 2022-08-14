import { NextPage } from 'next'
import Footer from '../components/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'

const Posts: NextPage = () => {
  
  const page = "/posts"

  return (
    <>
      <HeadCustom />
      <Menu page={page} />
      <h1 className="text-3xl font-bold underline">Posts</h1>
      <Footer />
    </>
  )
}

export default Posts
