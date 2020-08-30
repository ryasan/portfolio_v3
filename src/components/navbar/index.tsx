import React, { useState } from 'react'

import Icon from '../icons'
import { classList } from '../../utils'
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
    { text: 'Works', icon: 'briefcase' },
    { text: 'Contact', icon: 'envelope' }
]

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
                        onMouseLeave={() => setActiveIdx(null)}>
                        <div
                            className={classList({
                                'nav__item-content': true,
                                'nav__item-content--text': true,
                                [i === activeIdx ? 'active' : 'hidden']: true
                            })}>
                            {item.text}
                        </div>
                        <div
                            className={classList({
                                'nav__item-content': true,
                                'nav__item-content--icon': true,
                                [i === activeIdx ? 'hidden' : 'active']: true
                            })}>
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
