import React from 'react'

import WorkstationIllustration from './workstation'
import { components } from '../../pages'
import './hero.scss'

interface HeroInterface {
  classNames: string
  handlePageClick: (idx: number) => void
}

const HeroComponent: React.FC<HeroInterface> = ({ classNames, handlePageClick }) => (
  <section className={`hero section ${classNames}`}>
    <div className='parallax-wrapper'>
      <div className='hero__outer'>
        <div className='hero__inner'>
          <div className='hero__column hero__column--left'>
            <div className='hero__svg-container'>
              <WorkstationIllustration />
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
            <button
              className='hero__btn'
              onClick={() => handlePageClick(components.length - 1)}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroComponent
