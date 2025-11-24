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
