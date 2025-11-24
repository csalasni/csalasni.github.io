/* eslint-disable @next/next/no-img-element */
import { Texts } from 'utils/texts'
import { Data } from 'utils/data'
import Styles from './styles.module.scss'
import { useTheme } from 'utils/theme-context'

export const Footer = () => {
  return (
    <div className={Styles.footer}>
      <a
        target="_blank"
        rel="noreferrer"
        href={Data.github}
      >
        <img 
          alt="github-logo" 
          src="/github.svg" 
          className={Styles.linkLogos}  
          width={40} 
        />
      </a>
      
      <p className={Styles.subfooter}> {Texts.footer}</p>
    </div>
  )
}
