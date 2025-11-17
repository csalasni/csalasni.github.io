/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Styles from './styles.module.scss'

export const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <ul className={Styles.logo}>
        <Link href="/">
          <a>
            <img alt="logo" src="/pixel_logo.png" height={64} width={64} />
          </a>
        </Link>
      </ul>
    </div>
  )
}
