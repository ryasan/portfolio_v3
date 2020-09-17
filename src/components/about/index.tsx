import React from 'react'

import './about.scss'
import SvgImage from '../svgs'

interface AboutInterface {
    classNames: string
}

const AboutComponent: React.FC<AboutInterface> = ({ classNames }) => {
    return (
        <section className={`about ${classNames}`}>
            <div className='parallax-wrapper'>
                <div className='about__outer'>
                    <div className='about__inner'>
                        <div className='about__column about__column--left'>
                            <h1 className='about__title'>About</h1>
                            <div className='about__paragraph-container'>
                                <p className='about__paragraph'>
                                    I haven't always been interested in
                                    software. I didn't think I was smart enough
                                    to code. I started out doing help desk and
                                    support type roles. But as time went on I
                                    was exposed more and more to the industry
                                    and I found a passion in it. Now I love all
                                    things web development & design!
                                </p>
                                <p className='about__paragraph'>
                                    When I'm not on my never ending quest to
                                    improve my coding techniques you'll find me
                                    relaxing with one or two of my other hobbies
                                    - billiards, skating, eating, or taking care
                                    of my 2 little ones, a french bulldog & chihuahua :D
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
}

export default AboutComponent
