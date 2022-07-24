/* eslint-disable @next/next/no-img-element */
import Texts from 'utils/texts'
import Styles from './styles.module.scss'

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <a
        target="_blank"
        rel="noreferrer"
        href={'https://www.linkedin.com/in/salascarlosni/'}
      >
        <img alt="linkedin-logo" src="/linkedin.svg" width={40} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href={'https://github.com/salascarlosni'}
      >
        <img alt="github-logo" src="/github.svg" width={40} />
      </a>

      <p> {Texts.footer}</p>
    </div>
  )
}

export default Footer
