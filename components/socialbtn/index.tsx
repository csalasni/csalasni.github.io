import styles from './styles.module.scss'

export interface SocialBtnProps {
  title: string
  url: string
}

const SocialBtn = ({ title, url }: SocialBtnProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.buttonSlide}
    >
      {title}
    </a>
  )
}

export default SocialBtn
