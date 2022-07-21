/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Post } from '../Ipost'
import Styles from './styles.module.scss'

interface PostsProps {
  post: Post
  link: string
}

const CardPosts = ({ post, link }: PostsProps) => {
  return (
    <div className={Styles.cardPost}>
      <div className={Styles.cardImgContainer}>
        <img alt={`Picture of the ${post.title}`} src={post.image} />
      </div>

      <p className={Styles.cardDate}> {post.date} </p>

      <p className={Styles.cardTitle}> {post.title}</p>

      <div className={Styles.btnSection}>
        <Link href={`/blog/${link}`}>
          <a> Read full article </a>
        </Link>
      </div>
    </div>
  )
}

export default CardPosts
