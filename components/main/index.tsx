import { SocialBtn } from 'components/socialbtn';
import { Texts } from 'utils/texts';
import { ProjectList } from './projectList';
import { Card } from 'components/card';
import Styles from './style.module.scss';

export const Main = () => {
  return (
    <div className="container">
      <div className={Styles.topContent}>
        <div className={Styles.topContainerText}>
          <p className="intro"> {Texts.introduction} </p>
          <h1> {Texts.title} </h1>
          <h2> {Texts.subtitle} </h2>
          <p> {Texts.description} </p>

          <div className={Styles.buttonContainer}>
            <SocialBtn url='https://www.linkedin.com/in/salascarlosni/' title='LinkedIn' />
            <SocialBtn url='https://github.com/salascarlosni' title='Github' />
          </div>
        </div>
      </div>

      {/* Projects */}
      <h2 className={Styles.title}> {Texts.projects} </h2>
      <div className={Styles.cardList}>
        {ProjectList.map((el) => (
          <Card {...el} key={el.title} />
        ))}
      </div>
    </div>
  )
}
