import React, { useState } from 'react'

import Icon from '../icons'
import './navbar.scss'

type NavItemType = {
  text: string
  icon: string
}

interface NavbarInterface {
  pageIdx: number
  scrollUp: (page: number) => void
  scrollDown: (page: number) => void
  handleNavItemClick: (page: number) => void
}

const links: NavItemType[] = [
  { text: 'Home', icon: 'home' },
  { text: 'About', icon: 'person' },
  { text: 'Skills', icon: 'settings' },
  { text: 'Work', icon: 'briefcase' },
  { text: 'Contact', icon: 'envelope' }
]

const renderTextClasses = (idx: number, activeIdx: number | null) => {
  return [
    'nav__item-content',
    'nav__item-content--text',
    idx === activeIdx ? 'active' : 'hidden'
  ].join(' ')
}

const renderIconClasses = (idx: number, activeIdx: number | null) => {
  return [
    'nav__item-content',
    'nav__item-content--icon',
    idx === activeIdx ? 'hidden' : 'active'
  ].join(' ')
}

const NavbarComponent: React.FC<NavbarInterface> = ({ handleNavItemClick }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <Icon name='light-bulb' className='nav__logo-svg' />
        <div className='nav__logo-text'>RS</div>
      </div>
      <ul className='nav__nav-list'>
        {links.map((item: NavItemType, i: number) => (
          <li
            key={i}
            className='nav__nav-item'
            onClick={() => handleNavItemClick(i)}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
          >
            <div className={renderTextClasses(i, activeIdx)}>{item.text}</div>
            <div className={renderIconClasses(i, activeIdx)}>
              <Icon name={item.icon} />
            </div>
          </li>
        ))}
      </ul>
      <ul className='social'></ul>
    </div>
  )
}

export default NavbarComponent
