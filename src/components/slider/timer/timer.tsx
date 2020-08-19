import React from 'react'

import './timer.scss'


interface Props {
  pct: number
}

const TimerComponent: React.FC<Props> = ({ pct }) => {
  const styles = {
    borderBottomColor: pct >= 50 ? '#0cfdd7' : 'transparent',
    borderLeftColor: pct >= 75 ? '#0cfdd7' : 'transparent',
    borderRightColor: pct >= 25 ? '#0cfdd7' : 'transparent',
    borderTopColor: pct >= 100 ? '#0cfdd7' : 'transparent'
  }

  return (
    <div className='timer'>
      <div className='timer__bg' />
      <div className='timer__clock' style={styles} />
    </div>
  )
}

export default TimerComponent
