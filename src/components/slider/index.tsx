import React, { useState, useEffect, CSSProperties } from 'react'
import { useMediaQuery } from 'react-responsive'

import Dots from './dots/dots'
import Timer from './timer/timer'
import Icon from '../icons'
import { projectItems as _items, ProjectItem } from './slider-items'
import { classList, device, sleep } from '../../utils'
import './slider.scss'

interface Props {
    cardWidth: number
    modalActive?: boolean
    setProject: (p: ProjectItem) => void
}

interface CardInterface extends Props {
    pos: number
    idx: number
    currentIdx: number
    toggleIsHovering: () => void
}

const createItem = (pos: number, idx: number, cardWidth: number) => {
    const translateX = `translateX(${pos * cardWidth}px)`
    const item = {
        styles: {
            card: {} as CSSProperties,
            cardInner: {} as CSSProperties
        },
        data: _items[idx],
        pos: pos
    }

    switch (pos) {
        case activeIdx - 1:
            item.styles = {
                card: { transform: `${translateX}`, filter: 'grayscale(1)' },
                cardInner: { transform: 'rotateY(15deg) scale(0.8)' }
            }
            break
        case activeIdx + 1:
            item.styles = {
                card: { transform: `${translateX}`, filter: 'grayscale(1)' },
                cardInner: { transform: 'rotateY(-15deg) scale(0.8)' }
            }
            break
        case activeIdx:
            item.styles.card = { transform: `${translateX}` }
            break
        default:
            item.styles.card = {
                transform: `${translateX} scale(0.6)`,
                opacity: 0
            }
            break
    }

    return item
}

const Card: React.FC<CardInterface> = props => {
    const { idx, pos, toggleIsHovering, setProject, cardWidth } = props
    const { data, styles } = createItem(pos, idx, cardWidth)

    return (
        <li
            className='card'
            style={styles.card}
            onMouseEnter={toggleIsHovering}
            onMouseLeave={toggleIsHovering}
            onClick={() => setProject(data)}>
            <div className='card__inner' style={styles.cardInner}>
                <div className='card__img-container'>
                    <img
                        src={data.images[0]}
                        alt='placeholder'
                        className='card__image'
                    />
                </div>
                <div className='card__body'>{data.title}</div>
            </div>
        </li>
    )
}

const middle = (arr: any[]) => Math.floor(arr.length / 2)

const activeIdx = middle(_items)

const positions = Array.from(
    { length: _items.length },
    (_, i) => (i + activeIdx) % _items.length
)

const SliderComponent: React.FC<Props> = props => {
    const { modalActive, setProject, cardWidth } = props
    const [currentIdx, setCurrentIdx] = useState<number>(activeIdx)
    const [isHovering, setIsHovering] = useState<boolean | null>(null)
    const [isTicking, setIsTicking] = useState(false)
    const [items, setItems] = useState(positions)
    const [pct, setPct] = useState(0)
    const len = items.length

    const handlePrevClick = (jump: number = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => prev.map((_, i) => prev[(i + jump) % len]))
        }
    }

    const handleNextClick = (jump: number = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => prev.map((_, i) => prev[(i - jump + len) % len]))
        }
    }

    const handleDotClick = (idx: number) => {
        setPct(0)
        if (idx < currentIdx) handleNextClick(currentIdx - idx)
        if (idx > currentIdx) handlePrevClick(idx - currentIdx)
    }

    const toggleIsHovering = () => setIsHovering(prev => !prev)

    useEffect(() => {
        let interval: any
        if (!isHovering) {
            interval = setInterval(() => {
                setPct(prev => (prev < 100 ? prev + 25 : 0))
            }, 1000)
        }
        if (isHovering || modalActive) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isHovering])

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false))
    }, [isTicking])

    useEffect(() => {
        if (pct === 100) handleNextClick()
    }, [pct])

    useEffect(() => {
        setCurrentIdx(items[middle(items)])
    }, [items])

    return (
        <div className='carousel'>
            <div className='carousel__inner'>
                <div className='carousel__track'>
                    <ul
                        className={classList({
                            'carousel__item-list': true,
                            even: len % 2 === 0,
                            odd: len % 2 !== 0
                        })}>
                        <button
                            className='carousel__btn carousel__btn--prev'
                            onClick={() => handlePrevClick()}
                            onMouseEnter={toggleIsHovering}
                            onMouseLeave={toggleIsHovering}>
                            <Icon name='chevron-left' />
                        </button>
                        {items.map((pos, i) => (
                            <Card
                                key={i}
                                idx={i}
                                pos={pos}
                                cardWidth={cardWidth}
                                currentIdx={currentIdx}
                                toggleIsHovering={toggleIsHovering}
                                setProject={setProject}
                            />
                        ))}
                        <button
                            className='carousel__btn carousel__btn--next'
                            onClick={() => handleNextClick()}
                            onMouseEnter={toggleIsHovering}
                            onMouseLeave={toggleIsHovering}>
                            <Icon name='chevron-right' />
                        </button>
                    </ul>
                </div>
                <Dots
                    currentIdx={currentIdx}
                    numberOfDots={len}
                    onClick={handleDotClick}
                />
                <Timer pct={pct} />
            </div>
        </div>
    )
}

const withCardWidth = (Component: any) => (props: any) => {
    const isMobile = useMediaQuery({ query: device.mobileL })
    const cardWidth = isMobile ? 300 : 500

    return <Component {...props} cardWidth={cardWidth} />
}

export default withCardWidth(SliderComponent)
