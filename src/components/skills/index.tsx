import React from 'react'

import './skills.scss'

interface Props {
  classNames: string
}

const SkillsComponent: React.FC<props> = ({ classNames }) => (
  <section className={`skills section ${classNames}`}>
    <div className='parallax-wrapper'>
      <div className='skills__outer'>
        <div className='skills__inner'>
          {/* prettier-ignore */}
          <h1 className='skills__title'>Skills &<br/>Experience</h1>
          <div className='skills__column skills__column--left'>
            <div className='skills__text-container'>
              <p className='skills__paragraph'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                sit ratione vitae repudiandae, nam minus.
              </p>
              <p className='skills__paragraph'>
                Magni ratione vitae repudiandae, nam minus, non officiis
                nesciunt ipsa temporibus et illum? Asperiores sapiente
                laudantium dolorum vero? Deleniti, dolor! Nemo?
              </p>
              <p className='skills__paragraph'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                sit ratione vitae repudiandae.
              </p>
            </div>
          </div>
          <div className='skills__column skills__column--right'>
            <h3>Right column</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SkillsComponent
