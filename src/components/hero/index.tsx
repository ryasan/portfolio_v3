import React from 'react'

import SvgImage from '../svgs'
import './hero.scss'

type HeroProps = {
  classNames: string
}

const HeroComponent: React.FC<HeroProps> = ({ classNames }) => (
  <section className={`hero section ${classNames}`}>
    <div className='content-wrapper'>
      <div className='hero__inner'>
        <div className='hero__column hero__column--left'>
          <div className='hero__svg-container'>
            <SvgImage className='hero__svg' name='hero' />
          </div>
        </div>
        <div className='hero__column hero__column--right'>
          <div className='hero__text-container'>
            <h1 className='hero__title'>
              Hello Moto{' '}
              <span className='hero__title-newline'>
                My name is <span className='hero__name'>Ryan</span>
              </span>
            </h1>
            <span className='hero__title-ampersand'>&</span>
            <h4 className='hero__subtitle'>I'm a frontend developer.</h4>
          </div>
          <button className='hero__btn'>CONTACT</button>
        </div>
      </div>
    </div>
  </section>
)

export default HeroComponent
