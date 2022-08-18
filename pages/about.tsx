import { NextPage } from 'next'
import About from '../components/about/about'
import Footer from '../components/footer/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'

const AboutPage: NextPage = () => {
  
  const page = '/about'

  return (
    <>
      <HeadCustom />
      <div className='relative min-h-screen min-w-full'>
        <Menu page={page} />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
