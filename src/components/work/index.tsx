import React from 'react'

import Slider from '../slider'
import './work.scss'

type Props = {
  classNames: string
}

const WorkComponent: React.FC<Props> = ({ classNames }) => {
  return (
    <section className={`work section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='work__inner'>
          <h1 className='work__title'>Works</h1>
          <Slider />
        </div>
      </div>
    </section>
  )
}

export default WorkComponent
