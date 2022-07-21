import ListBlogsLayout from 'components/list-blogs-layout'
import Transitions from 'components/transition'
import { getPosts } from 'utils/getBlogs'

const Blogs = ({ posts }: any) => {
  return (
    <Transitions>
      <ListBlogsLayout posts={posts} />
    </Transitions>
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
