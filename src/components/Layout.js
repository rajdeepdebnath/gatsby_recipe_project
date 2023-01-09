import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {main} from '../styles/layout.module.css'

const Layout = ({children}) => {
  return (
    <main className={main}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
