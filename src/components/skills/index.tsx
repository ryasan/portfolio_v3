import React from 'react'

import './skills.scss'
import TagCloud from './tag-cloud'

interface SkillsInterface {
    classNames: string
}

const SkillsComponent: React.FC<SkillsInterface> = ({ classNames }) => {
    return (
        <section className={`skills ${classNames}`}>
            <div className='parallax-wrapper'>
                <div className='skills__outer'>
                    <div className='skills__inner'>
                        <div className='skills__column skills__column--left'>
                            <div className='skills__tag-cloud-container'>
                                <TagCloud />
                            </div>
                        </div>
                        <div className='skills__column skills__column--right'>
                            <h1 className='skills__title'>
                                Skills &<br />
                                Experience
                            </h1>
                            <div className='skills__text-container'>
                                <p className='skills__paragraph'>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Magni sit ratione vitae
                                    repudiandae, nam minus.
                                </p>
                                <p className='skills__paragraph'>
                                    Magni ratione vitae repudiandae, nam minus,
                                    non officiis nesciunt ipsa temporibus et
                                    illum? Asperiores sapiente laudantium
                                    dolorum vero? Deleniti, dolor! Nemo?
                                </p>
                                <p className='skills__paragraph'>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Magni sit ratione vitae
                                    repudiandae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsComponent
