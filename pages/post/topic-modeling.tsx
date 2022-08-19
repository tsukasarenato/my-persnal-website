import { NextPage } from 'next'
import Footer from '../../components/footer/footer'
import HeadCustom from '../../components/head'
import Menu from '../../components/menu/menu'

const TopicModelingPage: NextPage = () => {
  
  const page = "/posts"

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen">
        <Menu page={page} />
        <h1>Topic modeling</h1>
        <Footer />
      </div>
    </>
  )
}

export default TopicModelingPage
