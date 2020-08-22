import React from 'react'

import './horizontal-screen.scss'

const HorizontalScreenComponent: React.FC = () => {
  return (
    <div className='screen-horizontal'>
      <div className='screen-horizontal__inner'>
        <div className='screen-horizontal__track'>
          <div className='screen-horizontal__activity'></div>
          <div className='screen-horizontal__activity'></div>
          <div className='screen-horizontal__activity'></div>
        </div>
        <div className='screen-horizontal__frame'></div>
      </div>
      <div className='screen-horizontal__base'>
        <div className='screen-horizontal__base-bottom'></div>
      </div>
    </div>
  )
}

export default HorizontalScreenComponent
