import React from 'react'

import './about.scss'
import SvgImage from '../svgs'

interface AboutInterface {
    classNames: string
}

const AboutComponent: React.FC<AboutInterface> = ({ classNames }) => (
    <section className={`about ${classNames}`}>
        <div className='parallax-wrapper'>
            <div className='about__outer'>
                <div className='about__inner'>
                    <div className='about__column about__column--left'>
                        <h1 className='about__title'>About</h1>
                        <div className='about__paragraph-container'>
                            <p className='about__paragraph'>
                                I haven't always been interested in software. To
                                me, it seemed like a path that the
                                intellectually minded tended to take and I never
                                thought of myself the type. Heck I still don't.
                            </p>
                            <p className='about__paragraph'>
                                A decent sized chunk of my career has been
                                rooted mostly in hardware and support. But as
                                time went on I was exposed more and more to the
                                software industry and I found a growing passion
                                in it. Now I love all things web development &
                                design!
                            </p>
                            <p className='about__paragraph'>
                                When I'm not on my never ending quest to improve
                                my coding techniques you'll most likely find me
                                at the local billiards room playing pool, eating
                                something with a bunch of sugar in it, or taking
                                care of my 2 little ones, a chihuahua named Max
                                and a french bulldog named Bandit.
                            </p>
                        </div>
                    </div>
                    <div className='about__column about__column--right'>
                        <div className='about__illustration'>
                            <SvgImage name='me' className='about__me' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default AboutComponent
