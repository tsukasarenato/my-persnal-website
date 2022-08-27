import { NextPage } from 'next'
import Footer from '../../components/footer/footer'
import HeadCustom from '../../components/head'
import Menu from '../../components/menu/menu'
import Post from '../../components/post/post'
import { useRouter } from 'next/router'
import { getTopicModelingPart2 } from '../../components/post/content/topic-modeling-part-2'

const TopicModelingPart2Page: NextPage = () => {
  
  const page = "/post/topic-modeling-part-2"

  const previous_page = "/post/topic-modeling"

  const { locale } = useRouter()

  const post = getTopicModelingPart2(locale)

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

export default TopicModelingPart2Page
