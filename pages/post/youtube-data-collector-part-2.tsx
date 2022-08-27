import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Footer from '../../components/footer/footer'
import HeadCustom from '../../components/head'
import Menu from '../../components/menu/menu'
import { getYoutubeDataCollectorPart2 } from '../../components/post/content/youtube-data-collector-part-2'
import Post from '../../components/post/post'

const YoutubeDataCollectorPart2Page: NextPage = () => {
  
  const page = "/post/youtube-data-collector-part-2"

  const previous_page = "/post/youtube-data-collector"

  const { locale } = useRouter()

  const post = getYoutubeDataCollectorPart2(locale)

  return (
    <>
      <HeadCustom />
      <div className="relative min-h-screen">
        <Menu page={page} />
        <Post title={post.title} image={post.image} content={post.content}
          locale={locale} previous={previous_page} next={page} />
        <Footer />
      </div>
    </>
  )
}

export default YoutubeDataCollectorPart2Page
