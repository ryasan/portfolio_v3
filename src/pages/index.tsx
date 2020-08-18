import React, { useState } from 'react'
import { throttle } from 'lodash'
import '../home.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills/index'
import Work from '../components/work'
import Contact from '../components/contact'
import Navbar from '../components/navbar'

const components = [Hero, About, Skills, Work, Contact]
const transitionDuration: number = 600

const IndexPage: React.FC = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [pageIdx, setPageIdx] = useState<number>(0)
  const totalSlideNumber = components.length

  const slideDurationTimeout = (slideDuration: number) => {
    setTimeout(() => {
      setIsBusy(false)
    }, slideDuration)
  }

  const parallaxScroll = throttle((e: React.WheelEvent<HTMLDivElement>) => {
    const isWheelingDown = -e.deltaY <= 0

    if (isWheelingDown && !isBusy) {
      setIsBusy(true)
      if (pageIdx !== totalSlideNumber - 1) {
        scrollDown()
      }
      slideDurationTimeout(transitionDuration)
    }

    if (!isWheelingDown && !isBusy) {
      setIsBusy(true)
      if (pageIdx !== 0) {
        scrollUp()
      }
      slideDurationTimeout(transitionDuration)
    }
  })

  const scrollDown = (pages: number = 1): void => {
    setPageIdx(prevIdx => prevIdx + pages)
  }

  const scrollUp = (pages: number = 1): void => {
    setPageIdx(prevIdx => prevIdx - pages)
  }

  return (
    <Layout>
      <SEO title='Ryan Santos - Frontend Developer' />
      <Navbar scrollDown={scrollDown} scrollUp={scrollUp} pageIdx={pageIdx} />
      <div className='sections-container' onWheel={parallaxScroll}>
        {components.map((Component: React.ReactType, i) => {
          const classNames = [
            i <= pageIdx - 1 ? 'down-scroll' : '',
            i !== totalSlideNumber - 1 && i >= pageIdx ? 'up-scroll' : ''
          ]

          return <Component key={i} classNames={classNames.join(' ').trim()} />
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
