import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Footer from '../../components/footer/footer'
import HeadCustom from '../../components/head'
import Menu from '../../components/menu/menu'
import { getYoutubeDataCollectorPart1 } from '../../components/post/content/youtube-data-collector-part-1'
import Post from '../../components/post/post'

const YoutubeDataCollectorPage: NextPage = () => {
  
  const page = "/posts"

  const { locale } = useRouter()

  const post = getYoutubeDataCollectorPart1(locale)

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen">
        <Menu page={page} />
        <Post title={post.title} image={post.image} content={post.content} />
        <Footer />
      </div>
    </>
  )
}

export default YoutubeDataCollectorPage
