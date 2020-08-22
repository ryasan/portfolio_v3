import React from 'react'

import './vertical-screen.scss'

const BlkScreenComponent: React.FC = () => {
  return (
    <div className='screen'>
      <div className='screen__inner'>
        <div className='screen__track'>
          <div className='screen__activity'></div>
          <div className='screen__activity'></div>
          <div className='screen__activity'></div>
        </div>
        <div className='screen__frame'></div>
      </div>
      <div className='screen__base'>
        <div className='screen__base-bottom'></div>
      </div>
    </div>
  )
}

export default BlkScreenComponent
