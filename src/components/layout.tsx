import React from 'react'

import 'normalize.css'

import Navbar from './navbar'
import './globals.scss'
import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='layout__main'>{children}</main>
    </div>
  )
}

export default Layout
