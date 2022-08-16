import { NextPage } from 'next'
import Footer from '../components/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'

const Posts: NextPage = () => {
  
  const page = "/posts"

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen">
        <Menu page={page} />
        <div className="pb-28">
          <h1 className="text-3xl font-bold underline">Content</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Posts
