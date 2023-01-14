import Head from 'next/head'
import Texts from 'utils/texts'
import Styles from './styles.module.scss'

interface PostMeta {
  title: string
}

interface PostLayoutProps {
  children: React.ReactNode
  meta: PostMeta
}

const PostLayout = ({ children, meta }: PostLayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {meta.title} - {Texts.title}
        </title>
      </Head>
      <div className="container">
        <div className={Styles.blogs}>
          <div className={Styles.post}>
            <h1> {meta.title} </h1>

            <div className={Styles.containerBlog}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostLayout
