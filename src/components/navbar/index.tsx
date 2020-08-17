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
  active: boolean
}

const NavbarComponent: React.FC<Props> = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <Icon name='light-bulb' className='nav__logo-svg' />
        <div className='nav__logo-text'>RS</div>
      </div>
      <ul className='nav__nav-list'>
        {links.map((item: NavItem, i: number) => {
          const classNames = [ 'nav__nav-item', i === selectedIdx ? 'active' : '' ] // prettier-ignore

          return (
            <motion.li
              key={i}
              className={classNames.join(' ').trim()}
              onMouseEnter={() => setSelectedIdx(i)}
              onMouseLeave={() => setSelectedIdx(null)}
              {...slideLeft(item.animationDelay)}
            >
              {i === selectedIdx && (
                <div className='nav__item-content'>{item.text}</div>
              )}
              {!(i === selectedIdx) && (
                <div className='nav__item-content'>
                  <Icon name={item.icon} className='nav__icon' />
                </div>
              )}
            </motion.li>
          )
        })}
      </ul>
      <ul className='social'></ul>
    </div>
  )
}

export default NavbarComponent
