/* eslint-disable @next/next/no-img-element */
import Styles from './styles.module.scss'

export interface ICard {
  title: string
  description: string
  image: string
  github?: string,
  techs?: ICardTech[],
  demo?: string
  cover?: boolean
}

interface ICardTech {
  key: string,
  url: string
}

export const Card = ({
  title,
  description,
  image,
  github,
  demo,
  techs,
  cover,
}: ICard) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardImgContainer}>
        <img
          className={cover ? Styles.imgCover : Styles.img}
          alt={`Picture of the ${title} `}
          src={image}
        />
      </div>

      {/* Text Container below the cover image */}
      <div className={Styles.cardTextContainer}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.cardDescription}>{description}</p>

        {/* List of technologies of each project */}
        <p className={Styles.subtitle}> Technologies </p>

        <div className={Styles.projectTechs}>
          {techs?.map(el => <>
            <img
              key={el.key}
              alt={`Picture of the ${el.key} `}
              src={el.url}
            />
          </>)}
        </div>

        {/* List of eternal urls of each project */}
        <p className={Styles.subtitle}> More </p>

        <div className={Styles.btnSection}>
          {github && (
            <a target="_blank" rel="noreferrer" href={github}>
              Github
            </a>
          )}
          {demo && (
            <a target="_blank" rel="noreferrer" href={demo}>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
