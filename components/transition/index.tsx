import { AnimatePresence, motion } from 'framer-motion'

interface TransitionsProps {
  children: React.ReactNode
  path: string
}

const Transitions = ({ children, path }: TransitionsProps) => {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      key={path}
      exit="exit"
      transition={{ ease: 'backInOut', duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
export default Transitions
