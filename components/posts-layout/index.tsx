import Transitions from 'components/transition'
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
    <div className="container">
      <Transitions>
        <div className={Styles.blogs}>
          <div className={Styles.post}>
            <h1> {meta.title} </h1>

            {children}
          </div>
        </div>
      </Transitions>
    </div>
  )
}

export default PostLayout
