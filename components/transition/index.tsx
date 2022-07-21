import { motion } from 'framer-motion'

interface TransitionsProps {
  children: React.ReactNode
}

const Transitions = ({ children }: TransitionsProps) => {
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
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
export default Transitions
