import React from 'react'

import './timer.scss'

interface Props {
  pct: number
}

const TimerComponent: React.FC<Props> = ({ pct }) => {
  const styles = {
    borderBottomColor: pct >= 50 ? '#7c7c7c' : 'transparent',
    borderLeftColor: pct >= 75 ? '#7c7c7c' : 'transparent',
    borderRightColor: pct >= 25 ? '#7c7c7c' : 'transparent',
    borderTopColor: pct >= 100 ? '#7c7c7c' : 'transparent'
  }

  return (
    <div className='timer'>
      <div className='timer__bg' />
      <div className='timer__clock' style={styles} />
    </div>
  )
}

export default TimerComponent
