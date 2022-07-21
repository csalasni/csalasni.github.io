import Transitions from 'components/transition'
import Cover from './cover'
import Projects from './projects'

const Main = () => {
  return (
    <Transitions>
      <Cover />
      <Projects />
    </Transitions>
  )
}

export default Main
