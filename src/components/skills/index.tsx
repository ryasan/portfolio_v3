import React, { createRef, useState, useLayoutEffect } from 'react'

import './skills.scss'
import Canvas from './canvas'

const containerRef = createRef<HTMLDivElement>()

const useWindowResize = () => {
  const [size, setSize] = useState([
    containerRef.current?.offsetWidth || 500,
    containerRef.current?.offsetHeight || 1000
  ])

  useLayoutEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setSize([
          containerRef.current?.offsetWidth,
          containerRef.current?.offsetHeight
        ])
      }
    }
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

interface Props {
  classNames: string
}

const SkillsComponent: React.FC<Props> = ({ classNames }) => {
  const [width, height] = useWindowResize()

  return (
    <section className={`skills section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='skills__outer'>
          <div className='skills__inner'>
            {/* prettier-ignore */}
            <div className='skills__column skills__column--left'>
            <h1 className='skills__title'>Skills &<br/>Experience</h1>
              <div className='skills__text-container'>
                <p className='skills__paragraph'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni sit ratione vitae repudiandae, nam minus.
                </p>
                <p className='skills__paragraph'>
                  Magni ratione vitae repudiandae, nam minus, non officiis
                  nesciunt ipsa temporibus et illum? Asperiores sapiente
                  laudantium dolorum vero? Deleniti, dolor! Nemo?
                </p>
                <p className='skills__paragraph'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni sit ratione vitae repudiandae.
                </p>
              </div>
            </div>
            <div className='skills__column skills__column--right'>
              <div className='skills__sphere-container' ref={containerRef}>
                {containerRef && <Canvas width={width} height={height} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsComponent
