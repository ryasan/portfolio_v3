import React from 'react'
import { motion } from 'framer-motion'

import './about.scss'

interface Props {
  classNames: string
}

const AboutComponent: React.FC<Props> = ({ classNames }) => {
  return (
    <section className={`about section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='about__inner'>
          <div className='about__column about__column--left'>
            <h1 className='about__title'>About</h1>
            <div className='about__paragraph-container'>
              <p className='about__paragraph'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                sit ratione vitae repudiandae, nam minus, non officiis nesciunt
                ipsa temporibus et illum? Asperiores sapiente laudantium dolorum
                vero? Deleniti, dolor! Nemo?
              </p>
              <p className='about__paragraph'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                sit ratione vitae repudiandae, nam minus, non officiis nesciunt
                ipsa temporibus et illum? Asperiores sapiente laudantium dolorum
                vero? Deleniti, dolor! Nemo?
              </p>
            </div>
          </div>
          <div className='about__column about__column--right'>
            <motion.div
              className='about__pyramid'
              transition={{ loop: Infinity, duration: 20, ease: 'linear' }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 360]
              }}
            >
              <div className='about__side' />
              <div className='about__side' />
              <div className='about__side' />
              <div className='about__side' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
