import React, { useState } from 'react'

import Icon from '../icons'
import { classList } from '../../utils'
import './navbar.scss'

type NavItemType = {
    text: string
    icon: string
    link?: string
}

interface NavbarInterface {
    pageIdx: number
    scrollUp: (page: number) => void
    scrollDown: (page: number) => void
    handleNavItemClick: (page: number) => void
}

interface NavItem {
    onClick: (arg?: any) => void
    onMouseEnter?: (arg: any) => void
    onMouseLeave?: (arg: any) => void
    idx: number
    activeIdx?: number | null
    item: {
        icon: string
        text: string
        link?: string
    }
}

const links: NavItemType[] = [
    { text: 'Home', icon: 'home' },
    { text: 'About', icon: 'person' },
    { text: 'Skills', icon: 'settings' },
    { text: 'Works', icon: 'briefcase' },
    { text: 'Contact', icon: 'envelope' }
]

const socials: NavItemType[] = [
    {
        text: 'Github',
        icon: 'github',
        link: 'https://github.com/ryasan86'
    },
    {
        text: 'Codepen',
        icon: 'codepen',
        link: 'https://codepen.io/ryasan86'
    },
    {
        text: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ryasan86'
    }
]

const NavItem: React.FC<NavItem> = ({
    onClick,
    onMouseEnter,
    onMouseLeave,
    idx,
    activeIdx,
    item
}) => (
    <li
        key={idx}
        className='nav__nav-item'
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div
            className={classList({
                'nav__item-content': true,
                'nav__item-content--text': true,
                [idx === activeIdx ? 'active' : 'hidden']: true
            })}>
            {item.text}
        </div>
        <div
            className={classList({
                'nav__item-content': true,
                'nav__item-content--icon': true,
                [idx === activeIdx ? 'hidden' : 'active']: true
            })}>
            <Icon name={item.icon} />
        </div>
    </li>
)

const NavbarComponent: React.FC<NavbarInterface> = ({ handleNavItemClick }) => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null)

    return (
        <div className='nav'>
            <div className='nav__logo-container'>
                <Icon name='light-bulb' className='nav__logo-svg' />
                <div className='nav__logo-text'>RS</div>
            </div>
            <ul className='nav__nav-list nav__nav-list--1'>
                {links.map((item: NavItemType, idx: number) => (
                    <NavItem
                        key={idx}
                        idx={idx}
                        activeIdx={activeIdx}
                        item={item}
                        onClick={() => handleNavItemClick(idx)}
                        onMouseEnter={() => setActiveIdx(idx)}
                        onMouseLeave={() => setActiveIdx(null)}
                    />
                ))}
            </ul>
            <ul className='nav__nav-list nav__nav-list--2'>
                {socials.map((item: NavItemType, idx: number) => (
                    <NavItem
                        key={idx}
                        idx={idx}
                        item={item}
                        onClick={() => window.open(item.link, '_blank')}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NavbarComponent
