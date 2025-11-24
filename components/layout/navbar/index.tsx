/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Styles from './styles.module.scss'

export const Navbar = () => {
  const [darkTheme, setDarkTheme ] = useState<Boolean>(true)

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <div className={Styles.navbar}>
      <ul className={Styles.logo}>
        <Link href="/">
          <a>
            <img alt="logo" src="/pixel_logo.png" height={64} width={64} />
          </a>
        </Link>

        {/*<button onClick={() => setDarkTheme(!darkTheme)}>
          Toggle Theme
        </button> */}
      </ul>
    </div>
  )
}
