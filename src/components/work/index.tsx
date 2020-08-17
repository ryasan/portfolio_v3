import React from 'react'

import './work.scss'
import Slider from '../slider/index'

type Props = {
  classNames: string
}

const WorkComponent: React.FC<Props> = ({ classNames }) => {
  return (
    <div className={`work section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='work__inner'>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default WorkComponent
