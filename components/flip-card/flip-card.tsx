import Styles from './styles.module.scss'


export interface FlipCardProps {
  image1: string
  image2: string
}

export const FlipCard = ({ image1, image2 }: FlipCardProps) => {
  return (
    <div className={Styles.flipCard}>
      <div className={Styles.flipCardInner}>
        <div className={Styles.flipCardFront}>
          <img src={image1} alt="Avatar" style={{width: "300px", height:"300px"}} />
        </div>
        <div className={Styles.flipCardBack}>
          <img src={image2} alt="Avatar" style={{width: "300px", height:"300px"}} />
        </div>
      </div>
    </div>
  )
}
