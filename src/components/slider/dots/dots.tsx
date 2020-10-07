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
}) => (
    <ul className='dot-list'>
        {Array.from({ length: numberOfDots })
            .map((_, i) => (
                <li
                    key={i}
                    className={classList({
                        dot: true,
                        active: i === currentIdx
                    })}
                    onClick={() => onClick(i)}
                />
            ))
            .reverse()}
    </ul>
)

export default DotsComponent
