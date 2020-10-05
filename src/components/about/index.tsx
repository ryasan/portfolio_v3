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
                                The origins of career has been rooted in
                                hardware and support. I haven't always been
                                interested in software. To me, it seemed like a
                                path for the intellectually gifted and I never
                                thought of myself the type.
                            </p>
                            <p className='about__paragraph'>
                                As time went on I was gradually exposed to the
                                software industry and I discovered an unexpected
                                passion in it. Now I'm into all things
                                development & design!
                            </p>
                            <p className='about__paragraph'>
                                When I'm not polishing my coding techniques
                                you'll most likely find me at the local
                                billiards room playing pool, eating something
                                with a bunch of sugar in it, or taking care of
                                my 2 little ones, a chihuahua named Max and a
                                french bulldog named Bandit.
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
