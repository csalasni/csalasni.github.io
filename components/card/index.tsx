/* eslint-disable @next/next/no-img-element */
import Styles from './styles.module.scss'

export interface ICard {
  title: string
  description: string
  image: string
  github?: string
  demo?: string
  cover?: boolean
}

export const Card = ({
  title,
  description,
  image,
  github,
  demo,
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

      <h3 className={Styles.title}>{title}</h3>
      <p>{description}</p>
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
  )
}
