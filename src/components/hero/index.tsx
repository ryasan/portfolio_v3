import React, { useRef, useState, useEffect, RefObject } from 'react'
import Typed from 'typed.js'

import WorkstationIllustration from './workstation'
import { components } from '../../pages'
import { sleep } from '../../utils'
import './hero.scss'

interface HeroInterface {
    classNames: string
    handlePageClick: (idx: number) => void
}

const HeroComponent: React.FC<HeroInterface> = ({
    classNames,
    handlePageClick
}) => {
    const refA = useRef<HTMLSpanElement>(null)
    const refB = useRef<HTMLSpanElement>(null)
    const [typedA, setTypedA] = useState<any>(null)
    const [typedB, setTypedB] = useState<any>(null)

    const sleepThenRemoveCursor = () => {
        sleep(2000).then(() => removeCursor(refB))
    }

    const removeCursor = (ref: RefObject<HTMLSpanElement>) => {
        ref?.current?.nextSibling?.remove()
    }

    const startB = () => {
        removeCursor(refA)
        setTypedB(
            new Typed(refB.current, {
                strings: ['Ryan'],
                typeSpeed: 50,
                backSpeed: 50,
                onComplete: sleepThenRemoveCursor
            })
        )
    }

    useEffect(() => {
        if (refA) {
            setTypedA(
                new Typed(refA.current, {
                    strings: ['Hello Moto', 'My name is'],
                    typeSpeed: 50,
                    backSpeed: 50,
                    startDelay: 3500,
                    fadeOut: true,
                    onComplete: startB
                })
            )
        }
    }, [refA])

    useEffect(() => {
        return () => {
            typedA?.destroy()
            typedB?.destroy()
        }
    }, [])

    return (
        <section className={`hero ${classNames}`}>
            <div className='parallax-wrapper'>
                <div className='hero__outer'>
                    <div className='hero__inner'>
                        <div className='hero__column hero__column--left'>
                            <div className='hero__svg-container'>
                                <WorkstationIllustration />
                            </div>
                        </div>
                        <div className='hero__column hero__column--right'>
                            <div className='hero__text-container'>
                                <span
                                    className='hero__title hero__title--1'
                                    ref={refA}></span>
                                <span
                                    className='hero__title hero__title--2'
                                    ref={refB}></span>
                                <span className='hero__title-ampersand'>&</span>
                                <h4 className='hero__subtitle'>
                                    I'm a frontend developer.
                                </h4>
                            </div>
                            <button
                                className='hero__btn'
                                onClick={() =>
                                    handlePageClick(components.length - 1)
                                }>
                                CONTACT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
