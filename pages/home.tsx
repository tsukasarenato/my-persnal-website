import { NextPage } from 'next'
import Footer from '../components/footer/footer'
import HeadCustom from '../components/head'
import Menu from '../components/menu/menu'
import Home from '../components/home/home'

const HomePage: NextPage = () => {
  
  const page = '/home'

  return (
    <>
      <HeadCustom />
      <div className='relative min-h-screen'>
        <Menu page={page} />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
