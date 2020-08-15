import React from 'react'

import HeroSvg from '../../images/hero.svg'
import './hero.scss'

const HomeComponent = () => {
  return (
    <section className='hero'>
      <div className='hero__inner-container'>
        <div className='hero__column hero__column--left'>
          <div className='hero__svg-container'>
            <HeroSvg className='hero__svg' />
          </div>
        </div>
        <div className='hero__column hero__column--right'>
          <div className='hero__text-container'>
            <h1 className='hero__title'>
              Hello Moto{' '}
              <span className='hero__title-newline'>My name is Ryan</span>
            </h1>
            <span className='hero__title-ampersand'>&</span>
            <h4 className='hero__subtitle'>I'm a frontend developer.</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeComponent
