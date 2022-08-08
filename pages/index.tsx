import type { NextPage } from 'next'
import HeadCustom from '../components/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
      <HeadCustom />
      <NavBar />
      <h1 className="text-3xl font-bold underline">Content</h1>
      <Footer />
    </>
  )
}

export default Home
