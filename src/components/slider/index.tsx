import React, { useState, useEffect } from 'react'

import Dots from './dots/dots'
import Timer from './timer/timer'
import { classList } from '../../utils'
import './slider.scss'

interface Item {
    text: string
    image: string
}

interface CardInterface {
    item: Item
    currentIdx: number
    idx: number
    toggleIsHovering: () => void
}

const Card: React.FC<CardInterface> = props => {
    const { currentIdx, idx, toggleIsHovering, item } = props

    return (
        <div
            className='slider__list-item'
            onMouseEnter={toggleIsHovering}
            onMouseLeave={toggleIsHovering}>
            <div
                className={classList({
                    slider__card: true,
                    'is-center': idx === currentIdx,
                    'is-left-outer-card': idx < currentIdx - 1,
                    'is-right-outer-card': idx > currentIdx + 1,
                    'is-left-inner-card': idx === currentIdx - 1,
                    'is-right-inner-card': idx === currentIdx + 1
                })}>
                <div className='slider__card-face'>
                    <div className='slider__card-header'>
                        <img
                            src={item.image}
                            alt='placeholder'
                            className='slider__card-image'
                        />
                    </div>
                    {/* <div className='slider__card-body'>{item.text}</div> */}
                </div>
            </div>
        </div>
    )
}

const items: Item[] = [
    {
        image: require('../../static/slider/notpinterest.png'),
        text: 'Notpinterest Clone'
    },
    {
        image: require('../../static/slider/mars-rovers.png'),
        text: 'Mars Rover Image Browser'
    },
    {
        image: require('../../static/slider/e&s.png'),
        text: 'E & S Streetwear Ecommerce Shop'
    },
    {
        image: require('../../static/slider/marvel-collections.png'),
        text: 'Marvel Collections Price Aggregator'
    },
    {
        image: require('../../static/slider/e&s.png'),
        text: 'E & S'
    },
    {
        image: require('../../static/slider/marvel-collections.png'),
        text: 'Marvel Collections'
    },
    {
        image: require('../../static/slider/e&s.png'),
        text: 'E & S'
    }
]

const distances = [90, 60, 30, 0, -30, -60, -90]

const SliderComponent: React.FC = () => {
    const half = Math.floor(items.length / 2)

    const [currentIdx, setCurrentIdx] = useState<number>(half)
    const [isHovering, setIsHovering] = useState<boolean | null>(null)
    const [pct, setPct] = useState(0)

    const handlePrevClick = () => {
        setCurrentIdx(
            (prev: number) => (prev + (items.length - 1)) % items.length
        )
    }

    const handleNextClick = () => {
        setCurrentIdx((prev: number) => (prev + 1) % items.length)
    }

    const handleDotClick = (idx: number) => {
        setPct(0)
        setCurrentIdx(idx)
    }

    const toggleIsHovering = () => {
        setIsHovering(prev => !prev)
    }

    useEffect(() => {
        let interval: any

        if (!isHovering) {
            interval = setInterval(() => {
                setPct(prev => (prev < 100 ? prev + 25 : 0))
            }, 1000)
        }
        if (isHovering) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isHovering])

    useEffect(() => {
        if (pct === 100) handleNextClick()
    }, [pct])

    return (
        <div className='slider'>
            <div className='slider__container'>
                <div className='slider__track'>
                    <div
                        className='slider__button'
                        onClick={handlePrevClick}
                        onMouseEnter={toggleIsHovering}
                        onMouseLeave={toggleIsHovering}>
                        &#8592;
                    </div>
                    <div
                        className='slider__list'
                        style={{
                            transform: `translateX(${distances[currentIdx]}rem)`
                        }}>
                        {items.map((item, i) => (
                            <Card
                                key={i}
                                idx={i}
                                item={item}
                                currentIdx={currentIdx}
                                toggleIsHovering={toggleIsHovering}
                            />
                        ))}
                    </div>
                    <div
                        className='slider__button'
                        onClick={handleNextClick}
                        onMouseEnter={toggleIsHovering}
                        onMouseLeave={toggleIsHovering}>
                        &#8594;
                    </div>
                </div>
                <Dots
                    currentIdx={currentIdx}
                    numberOfDots={items.length}
                    onClick={handleDotClick}
                />
                <Timer pct={pct} />
            </div>
        </div>
    )
}

export default SliderComponent
