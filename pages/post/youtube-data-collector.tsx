import { NextPage } from 'next'
import Footer from '../../components/footer/footer'
import HeadCustom from '../../components/head'
import Menu from '../../components/menu/menu'

const YoutubeDataCollectorPage: NextPage = () => {
  
  const page = "/posts"

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen">
        <Menu page={page} />
        <h1>Youtube Data Collector</h1>
        <Footer />
      </div>
    </>
  )
}

export default YoutubeDataCollectorPage
