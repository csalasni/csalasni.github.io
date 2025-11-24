import { Texts } from 'utils/texts';
import { ProjectList } from './projectList';
import { Card } from 'components/card';

import Styles from './style.module.scss';
import { FlipCard } from 'components/flip-card/flip-card';

export const Main = () => {

  return (
    <div className="container">
      <div className={Styles.topContent}>
        <div className={Styles.topContainerText}>
          <h1> {Texts.title} </h1>
          <h2> {Texts.subtitle} </h2>
          <p> {Texts.description} </p>
        </div>

        <div className={Styles.topContainerImage}>
          <FlipCard image1='https://images.elotrolado.net/headers/upload/1/1/11e74c_ferocious_news.jpg?1200' image2='https://images.elotrolado.net/headers/upload/7/a/7a76a1_steam-machine_news.jpg?1200'/>
        </div>
      </div>

      {/* Projects */}
      <p className={Styles.title}> {Texts.projects} </p>
      <div className={Styles.cardList}>
        {ProjectList.map((el) => (
          <Card {...el} key={el.title} />
        ))}
      </div>
    </div>
  )
}
