import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const motionAttr = {
    exitBeforeEnter: true,
    initial: true,
  }

  return (
    <>
      <Navbar />
      <AnimatePresence {...motionAttr}>{children}</AnimatePresence>
    </>
  )
}

export default Layout
