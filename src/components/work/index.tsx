import React from 'react'

import Slider from '../slider'
import './work.scss'

type WorkType = {
    classNames: string
}

const WorkComponent: React.FC<WorkType> = ({ classNames }) => {
    return (
        <section className={`work ${classNames}`}>
            <div className='parallax-wrapper'>
                <div className='work__outer'>
                    <div className='work__inner'>
                        <h1 className='work__title'>Works</h1>
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkComponent
