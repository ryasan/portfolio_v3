import React from 'react'

import './timer.scss'
import { classList } from '../../../utils'

interface TimerInterface {
    pct: number
}

const TimerComponent: React.FC<TimerInterface> = ({ pct }) => (
    <div className='timer'>
        <div className='timer__bg' />
        <div
            className={classList({
                timer__clock: true,
                'bottom-active': pct >= 50 || !pct,
                'left-active': pct >= 75 || !pct,
                'right-active': pct >= 25 || !pct,
                'top-active': pct >= 100 || !pct
            })}
        />
    </div>
)

export default TimerComponent
