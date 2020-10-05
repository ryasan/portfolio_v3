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
                                Sup! My name is Ryan and I'm a frontend
                                developer, pool player, skater, and proud father
                                of 2, a chihuahua named Baymax and french
                                bulldog named Bandit.
                            </p>
                            <p className='about__paragraph'>
                                The origins of career has been rooted in
                                hardware and support and I haven't always been
                                interested in software. To me, it seemed like a
                                path for the intellectually gifted and I never
                                thought of myself the type. But as time went on I
                                was gradually exposed to the software industry
                                and discovered an unexpected passion in it. Fast
                                forward to today and now I'm into all things
                                development & design!
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
