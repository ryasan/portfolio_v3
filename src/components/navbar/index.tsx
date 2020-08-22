import React, { useState } from 'react'

import Icon from '../icons'
import './navbar.scss'

type NavItem = {
  text: string
  icon: string
}

const links: NavItem[] = [
  { text: 'Home', icon: 'home' },
  { text: 'About', icon: 'person' },
  { text: 'Skills', icon: 'settings' },
  { text: 'Work', icon: 'briefcase' },
  { text: 'Contact', icon: 'envelope' }
]

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
            <li
              key={i}
              className='nav__nav-item'
              onClick={() => handleNavItemClick(i)}
              onMouseEnter={() => setSelectedIdx(i)}
              onMouseLeave={() => setSelectedIdx(null)}
            >
              <div className={textClasses}>{item.text}</div>
              <div className={iconClasses}>
                <Icon name={item.icon} />
              </div>
            </li>
          )
        })}
      </ul>
      <ul className='social'></ul>
    </div>
  )
}

export default NavbarComponent
