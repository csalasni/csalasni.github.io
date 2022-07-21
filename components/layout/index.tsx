import Transitions from 'components/transition'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
