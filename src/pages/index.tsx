import React, { useState, useRef, useEffect } from 'react'
import { throttle } from 'lodash'
import '../home.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills/index'
import Work from '../components/work'

const components = [Hero, About, Skills, Work]
const slideDurationSetting: number = 600
const scrollSensitivitySetting: number = 30

const IndexPage: React.FC = () => {
  const [ticking, setTicking] = useState(false)
  const [delta, setDelta] = useState<number>(0)
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0)
  const totalSlideNumber = components.length

  const slideDurationTimeout = (slideDuration: number) => {
    setTimeout(() => {
      setTicking(false)
    }, slideDuration)
  }

  const parallaxScroll = throttle((evt: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = evt.deltaY * -120
    setDelta(deltaY)
  })

  const scrollDown = () => {
    setCurrentSlideNumber(prev => {
      return prev + 1
    })
  }

  const scrollUp = () => {
    setCurrentSlideNumber(prev => prev - 1)
  }

  useEffect(() => {
    if (ticking !== true) {
      if (delta <= -scrollSensitivitySetting) {
        setTicking(true)
        if (currentSlideNumber !== totalSlideNumber - 1) {
          scrollDown()
        }
        slideDurationTimeout(slideDurationSetting)
      }
      if (delta >= scrollSensitivitySetting) {
        setTicking(true)
        if (currentSlideNumber !== 0) {
          scrollUp()
        }
        slideDurationTimeout(slideDurationSetting)
      }
    }
  }, [delta])

  return (
    <Layout>
      <SEO title='Home' />
      <div className='sections-container' onWheel={parallaxScroll}>
        {components.map((Component: React.ReactType, i) => {
          const classNames = [
            'background',
            i <= currentSlideNumber - 1 ? 'down-scroll' : '',
            (i !== totalSlideNumber - 1) && (i >= currentSlideNumber) && (delta >= scrollSensitivitySetting) ? 'up-scroll' : '' // prettier-ignore
          ]

          return <Component key={i} classNames={classNames.join(' ').trim()} />
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
