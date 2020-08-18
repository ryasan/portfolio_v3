import React from 'react'

import 'normalize.css'

import '../globals.scss'
import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='layout'>
      <main className='layout__main'>{children}</main>
    </div>
  )
}

export default Layout
