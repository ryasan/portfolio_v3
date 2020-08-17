import React from 'react'
import { motion } from 'framer-motion'

import Icon from '../icons'
import './navbar.scss'

type NavItem = {
  animationDelay: number
  text: string
  icon: string
}

const links: NavItem[] = [
  { text: 'Home', animationDelay: 0.3, icon: 'home' },
  { text: 'About', animationDelay: 0.9, icon: 'person' },
  { text: 'Work', animationDelay: 0, icon: 'briefcase' },
  { text: 'Contact', animationDelay: 0.6, icon: 'envelope' }
]

const slideLeft = (delay: number) => ({
  initial: { x: 80 },
  animate: { x: 0 },
  transition: { duration: 0.3, delay }
})

const NavbarComponent = () => {
  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <Icon name='light-bulb' className='nav__logo-svg' />
        <div className='nav__logo-text'>RS</div>
      </div>
      <ul className='nav__nav-list'>
        {links.map((item: NavItem, i: number) => (
          <motion.li
            key={i}
            className='nav__nav-item'
            {...slideLeft(item.animationDelay)}
          >
            <Icon name={item.icon} className='nav__icon' />
          </motion.li>
        ))}
      </ul>
      <ul className='social'></ul>
    </div>
  )
}

export default NavbarComponent
