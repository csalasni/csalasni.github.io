import { SocialBtn } from 'components/socialbtn'
import styles from './styles.module.scss'
import { Texts } from 'utils/texts'

export const Cover = () => {
  const attr = {
    linkedin: {
      url: 'https://www.linkedin.com/in/salascarlosni/',
      title: 'LinkedIn',
    },
    github: {
      url: 'https://github.com/salascarlosni',
      title: 'Github',
    },
  }

  return (
    <div className="container">
      <div className={styles.topContent}>
        <div className={styles.topContainerText}>
          <p className="intro"> {Texts.introduction} </p>
          <h1> {Texts.title} </h1>
          <h2> {Texts.subtitle} </h2>
          <p>{Texts.description}</p>

          <div className={styles.buttonContainer}>
            <SocialBtn {...attr.linkedin} />
            <SocialBtn {...attr.github} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
