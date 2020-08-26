import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  createRef
} from 'react'
import { throttle } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Loader from '../components/loader'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills/index'
import Work from '../components/work'
import Contact from '../components/contact'
import Navbar from '../components/navbar'
import '../home.scss'

interface ComponentInterface {
  component: React.ReactType
  componentRef?: React.RefObject<HTMLDivElement>
}

const googleMapsRef: React.RefObject<HTMLDivElement> = createRef()

export const components = [
  { component: Hero },
  { component: About },
  { component: Skills },
  { component: Work },
  { component: Contact, componentRef: googleMapsRef }
]
const transitionDuration: number = 600

const IndexPage: React.FC = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [pageIdx, setPageIdx] = useState<number>(0)
  const [_performance, setPerformance] = useState<any>(null)
  const firstRender = useRef<boolean>(true)
  const totalSlideNumber = components.length

  const slideDurationTimeout = (slideDuration: number) => {
    setTimeout(() => setIsBusy(false), slideDuration)
  }

  const parallaxScroll = throttle((e: any) => {
    if (googleMapsRef?.current?.contains(e.target)) return
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

  const handleNavItemClick = (idx: number) => {
    if (idx > pageIdx) {
      scrollDown(idx - pageIdx)
    }

    if (idx < pageIdx) {
      scrollUp(pageIdx - idx)
    }
  }

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else {
      localStorage.setItem('page', JSON.stringify(pageIdx))
    }
  }, [pageIdx])

  useEffect(() => {
    setPerformance(performance)
  }, [])

  useEffect(() => {
    if (_performance && _performance.navigation.type === 1) {
      const previousPage = JSON.parse(localStorage.getItem('page') || '')
      handleNavItemClick(Number(previousPage))
    }
  }, [_performance])

  return (
    <Layout>
      <SEO title='Ryan Santos - Frontend Developer' />
      <Navbar
        scrollDown={scrollDown}
        scrollUp={scrollUp}
        pageIdx={pageIdx}
        handleNavItemClick={handleNavItemClick}
      />
      <Loader />
      <div className='sections-container' onWheel={parallaxScroll}>
        {components.map((props: ComponentInterface, i) => {
          const classNames = [
            i <= pageIdx - 1 ? 'down-scroll' : '',
            i !== totalSlideNumber - 1 && i >= pageIdx ? 'up-scroll' : ''
          ]
            .join(' ')
            .trim()

          return (
            <props.component
              key={i}
              componentRef={props.componentRef}
              classNames={classNames}
              handlePageClick={handleNavItemClick}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
