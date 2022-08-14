import { NextPage } from 'next'
import Footer from '../components/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'

const Home: NextPage = () => {
  
  const page = "/home"

  return (
    <>
      <HeadCustom />
      <Menu page={page} />
      <h1 className="text-3xl font-bold underline">Content</h1>
      <Footer />
    </>
  )
}

export default Home
