/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Meta } from './Ipost'

import CardPosts from './card-blogs'
import Styles from './styles.module.scss'

interface ListBlogsLayoutProps {
  posts: Meta[]
}

const ListBlogsLayout = ({ posts }: ListBlogsLayoutProps) => {
  const [myPosts, setMyPosts] = useState(posts)

  const showList = () =>
    myPosts.map((post) => (
      <CardPosts post={post.meta} link={post.title} key={post.title} />
    ))

  const filterList = (searchText: string) => {
    searchText !== ''
      ? setMyPosts(myPosts.filter((post) => post.title.includes(searchText)))
      : setMyPosts(posts)
  }

  return (
    <div className="container">
      <h1> 🚀 Blog </h1>

      <div className={Styles.searchBar}>
        <img src="search.svg" alt="search icon" width={20} />

        <input
          placeholder="Search some posts"
          onChange={(e) => filterList(e.target.value)}
          className={Styles.searchInput}
        />
      </div>
      <div className={Styles.gridPosts}>{showList()}</div>
    </div>
  )
}

export default ListBlogsLayout
