import Card from 'components/card'
import Texts from 'content/texts'
import ProjectList from './list'
import Styles from './styles.module.scss'

const Projects = () => {
  return (
    <div className="container">
      <h2 className={Styles.title}> ✨ {Texts.projects}</h2>
      <div className={Styles.cardList}>
        {ProjectList.map((el) => (
          <Card {...el} key={el.title} />
        ))}
      </div>
    </div>
  )
}

export default Projects
