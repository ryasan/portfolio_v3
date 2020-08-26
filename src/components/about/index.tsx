import React from 'react'

import './about.scss'

interface AboutInterface {
  classNames: string
}

const AboutComponent: React.FC<AboutInterface> = ({ classNames }) => {
  return (
    <section className={`about section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='about__outer'>
          <div className='about__inner'>
            <div className='about__column about__column--left'>
              <h1 className='about__title'>About</h1>
              <div className='about__paragraph-container'>
                <p className='about__paragraph'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni sit ratione vitae repudiandae, nam minus, non officiis
                  nesciunt ipsa temporibus et illum? Asperiores sapiente
                  laudantium dolorum vero? Deleniti, dolor! Nemo?
                </p>
                <p className='about__paragraph'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni sit ratione vitae repudiandae, nam minus, non officiis
                  nesciunt ipsa temporibus et illum? Asperiores sapiente
                  laudantium dolorum vero? Deleniti, dolor! Nemo?
                </p>
              </div>
            </div>
            <div className='about__column about__column--right'>
              <div className='about__pyramid'>
                <div className='about__side' />
                <div className='about__side' />
                <div className='about__side' />
                <div className='about__side' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
