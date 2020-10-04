import React from 'react'
import { useMediaQuery } from 'react-responsive'

import TagCloud from './tag-cloud'
import SvgImage from '../svgs'
import { device } from '../../utils'
import './skills.scss'

interface SkillsInterface {
    classNames: string
}

const SkillsComponent: React.FC<SkillsInterface> = ({ classNames }) => {
    const isMobile = useMediaQuery({ query: device.mobileL })

    return (
        <section className={`skills ${classNames}`}>
            <div className='parallax-wrapper'>
                <div className='skills__outer'>
                    <div className='skills__inner'>
                        <div className='skills__column skills__column--left'>
                            {!isMobile && (
                                <div className='skills__tag-cloud-container'>
                                    <TagCloud />
                                </div>
                            )}
                            {isMobile && <SvgImage name='me' />}
                        </div>
                        <div className='skills__column skills__column--right'>
                            <h1 className='skills__title'>
                                Skills &<br />
                                Experience
                            </h1>
                            <div className='skills__text-container'>
                                <p className='skills__paragraph'>
                                    My primary skills fall mostly under the
                                    frontend spectrum of the tech variety.
                                    However, I have experience in all areas of
                                    the stack and don't mind getting my hands
                                    dirty whether it be frontend, backend, or
                                    anything in between.
                                </p>
                                <p className='skills__paragraph'>
                                    I've been part of teams employing scrum
                                    methodologies, involved in the feature
                                    planning processes, Git rebase and merge
                                    workflows...and more. Contact me if you'd
                                    like to know more.
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
