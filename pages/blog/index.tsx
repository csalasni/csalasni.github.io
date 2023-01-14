import ListBlogsLayout from 'components/list-blogs-layout'
import Head from 'next/head'
import { getPosts } from 'utils/getBlogs'
import Texts from 'utils/texts'

const Blogs = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Blog - {Texts.title}</title>
      </Head>

      <ListBlogsLayout posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  // Call at build-type to retrieve the list of posts.
  const posts = await getPosts()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blogs
