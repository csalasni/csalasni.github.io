/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Styles from './styles.module.scss'

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <ul className={Styles.logo}>
        <Link href="/">
          <a>
            <img alt="logo" src="/logo.svg" height={64} width={64} />
          </a>
        </Link>
      </ul>

      <ul className={Styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
