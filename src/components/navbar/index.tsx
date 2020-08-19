import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Icon from '../icons'
import './navbar.scss'

type NavItem = {
  animationDelay: number
  text: string
  icon: string
}

const links: NavItem[] = [
  { text: 'Home', animationDelay: 1.3, icon: 'home' },
  { text: 'About', animationDelay: 1.9, icon: 'person' },
  { text: 'Skills', animationDelay: 2.2, icon: 'settings' },
  { text: 'Work', animationDelay: 1, icon: 'briefcase' },
  { text: 'Contact', animationDelay: 1.6, icon: 'envelope' }
]

const slideLeft = (delay: number) => ({
  initial: { x: 80 },
  animate: { x: 0 },
  transition: { duration: 0.3, delay }
})

interface Props {
  pageIdx: number
  scrollUp: (page: number) => void
  scrollDown: (page: number) => void
  handleNavItemClick: (page: number) => void
}

const NavbarComponent: React.FC<Props> = ({ handleNavItemClick }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <Icon name='light-bulb' className='nav__logo-svg' />
        <div className='nav__logo-text'>RS</div>
      </div>
      <ul className='nav__nav-list'>
        {links.map((item: NavItem, i: number) => {
          const textClasses = [
            'nav__item-content',
            'nav__item-content--text',
            selectedIdx === i ? 'active' : 'hidden'
          ].join(' ')

          const iconClasses = [
            'nav__item-content',
            'nav__item-content--icon',
            selectedIdx === i ? 'hidden' : 'active'
          ].join(' ')

          return (
            <motion.li
              key={i}
              className='nav__nav-item'
              onClick={() => handleNavItemClick(i)}
              onMouseEnter={() => setSelectedIdx(i)}
              onMouseLeave={() => setSelectedIdx(null)}
              {...slideLeft(item.animationDelay)}
            >
              <div className={textClasses}>{item.text}</div>
              <div className={iconClasses}>
                <Icon name={item.icon} className='nav__icon' />
              </div>
            </motion.li>
          )
        })}
      </ul>
      <ul className='social'></ul>
    </div>
  )
}

export default NavbarComponent
