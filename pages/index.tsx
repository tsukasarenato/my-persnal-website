import type { NextPage } from 'next'
import HeadCustom from '../components/head'
import NavBar, { NavActived } from '../components/navbar'
import Footer from '../components/footer'

const Home: NextPage = () => {
  
  const actived: NavActived = {menu: "Home", language: "English"}

  return (
    <>
      <HeadCustom />
      <NavBar {...actived} />
      <h1 className="text-3xl font-bold underline">Content</h1>
      <Footer />
    </>
  )
}

export default Home
