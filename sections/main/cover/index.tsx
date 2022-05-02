import SocialBtn from 'components/socialbtn'
import styles from './styles.module.scss'
import texts from 'content/texts'

const Cover = () => {
  const attr = {
    linkedin: {
      url: 'https://www.linkedin.com/in/josesalasni/',
      title: 'LinkedIn',
    },
    github: {
      url: 'https://github.com/josesalasni',
      title: 'Github',
    },
  }

  return (
    <div className="container">
      <div className={styles.topContent}>
        <div className={styles.topContainerText}>
          <h1> {texts.title} </h1>
          <p className="formattedText">{texts.description}</p>

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

export default Cover
