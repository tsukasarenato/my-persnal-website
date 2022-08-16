import { NextPage } from 'next'
import Footer from '../components/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'

const About: NextPage = () => {
  
  const page = "/about"

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen min-w-full">
        <Menu page={page} />
        <div className="pb-28">
          <h1 className="text-3xl font-bold underline">Content</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About
