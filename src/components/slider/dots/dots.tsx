import React from 'react'

import { classList } from '../../../utils'
import './dots.scss'

interface DotsInfoInterface {
    currentIdx: number
    numberOfDots: number
    onClick: (idx: number) => void
}

const DotsComponent: React.FC<DotsInfoInterface> = ({
    currentIdx,
    numberOfDots,
    onClick
}) => {
    return (
        <div className='dot-list'>
            <div className='dot'></div>
            {Array.from({ length: numberOfDots }).map((_, i) => (
                <div
                    key={i}
                    className={classList({
                        dot: true,
                        active: i === currentIdx
                    })}
                    onClick={() => onClick(i)}
                />
            ))}
        </div>
    )
}

export default DotsComponent
