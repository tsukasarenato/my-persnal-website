import { NextPage } from 'next'
import Footer from '../../components/footer/footer'
import HeadCustom from '../../components/head'
import Menu from '../../components/menu/menu'
import Post from '../../components/post/post'
import { getTopicModelingPart1 } from '../../components/post/content/topic-modeling-part-1'
import { useRouter } from 'next/router'

const TopicModelingPage: NextPage = () => {
  
  const page = "/posts"

  const { locale } = useRouter()

  const post = getTopicModelingPart1(locale)

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

export default TopicModelingPage
