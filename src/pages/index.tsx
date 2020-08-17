import React, { useState, useRef, useEffect } from 'react'
import { throttle } from 'lodash'
import '../home.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills/index'
import Work from '../components/work'
import Contact from '../components/contact'

const components = [Hero, About, Skills, Work, Contact]
const transitionDuration: number = 600

const IndexPage: React.FC = () => {
  const [busy, isBusy] = useState(false)
  const [slideIdx, setSlideIdx] = useState<number>(0)
  const totalSlideNumber = components.length

  const slideDurationTimeout = (slideDuration: number) => {
    setTimeout(() => {
      isBusy(false)
    }, slideDuration)
  }

  const parallaxScroll = throttle((e: React.WheelEvent<HTMLDivElement>) => {
    const isWheelingDown = -e.deltaY <= 0

    if (isWheelingDown && !busy) {
      isBusy(true)
      if (slideIdx !== totalSlideNumber - 1) {
        scrollDown()
      }
      slideDurationTimeout(transitionDuration)
    }

    if (!isWheelingDown && !busy) {
      isBusy(true)
      if (slideIdx !== 0) {
        scrollUp()
      }
      slideDurationTimeout(transitionDuration)
    }
  })

  const scrollDown = (): void => setSlideIdx(prevIdx => prevIdx + 1)

  const scrollUp = (): void => setSlideIdx(prevIdx => prevIdx - 1)

  return (
    <Layout>
      <SEO title='Home' />
      <div className='sections-container' onWheel={parallaxScroll}>
        {components.map((Component: React.ReactType, i) => {
          const classNames = [
            'background',
            i <= slideIdx - 1 ? 'down-scroll' : '',
            i !== totalSlideNumber - 1 && i >= slideIdx ? 'up-scroll' : ''
          ]

          return <Component key={i} classNames={classNames.join(' ').trim()} />
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
