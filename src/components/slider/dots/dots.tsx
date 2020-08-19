import React from 'react'

import './dots.scss'


interface Props {
  currentIdx: number
  numberOfDots: number
  onClick: (idx: number) => void
}

const DotsComponent: React.FC<Props> = ({
  currentIdx,
  numberOfDots,
  onClick
}) => {
  return (
    <div className='dot-list'>
      <div className='dot'></div>
      {Array.from({ length: numberOfDots }).map((_, i) => (
        <div
          className={`dot${i === currentIdx ? ' active' : ''}`}
          key={i}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  )
}

export default DotsComponent
