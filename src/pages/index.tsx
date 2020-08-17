import React, { useState, useRef, useEffect } from 'react'
import { throttle } from 'lodash'
import '../home.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import About from '../components/about'
import Skills from '../components/skills/index'

interface Section {
  title: string
  subtitle: string
}

const sections = [
  {
    title: 'Full Page Parallax Effect',
    subtitle: 'Scroll down and up to see the effect!'
  },
  {
    title: 'Cras lacinia non eros nec semper.',
    subtitle:
      'ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.'
  },
  {
    title: 'Etiam consequat lectus.',
    subtitle:
      'Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.'
  }
]

const slideDurationSetting: number = 600
const scrollSensitivitySetting: number = 30

// const IndexPage: React.FC = () => {
//   const [ticking, setTicking] = useState(false)
//   const [delta, setDelta] = useState<number>(0)
//   const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0)
//   const containerRef = useRef<HTMLDivElement | any>(null)
//   const totalSlideNumber = containerRef?.current?.children?.length

//   const slideDurationTimeout = (slideDuration: number) => {
//     setTimeout(() => {
//       setTicking(false)
//     }, slideDuration)
//   }

//   const parallaxScroll = throttle((evt: React.WheelEvent<HTMLDivElement>) => {
//     const deltaY = evt.deltaY * -120
//     setDelta(deltaY)
//   })

//   const scrollDown = () => {
//     setCurrentSlideNumber(prev => {
//       return prev + 1
//     })
//   }

//   const scrollUp = () => {
//     setCurrentSlideNumber(prev => prev - 1)
//   }

//   useEffect(() => {
//     if (ticking !== true) {
//       if (delta <= -scrollSensitivitySetting) {
//         setTicking(true)
//         if (currentSlideNumber !== totalSlideNumber - 1) {
//           scrollDown()
//         }
//         slideDurationTimeout(slideDurationSetting)
//       }
//       if (delta >= scrollSensitivitySetting) {
//         setTicking(true)
//         if (currentSlideNumber !== 0) {
//           scrollUp()
//         }
//         slideDurationTimeout(slideDurationSetting)
//       }
//     }
//   }, [delta])

//   return (
//     <div className='container' ref={containerRef} onWheel={parallaxScroll}>
//       {sections.map((section: Section, i) => {
//         const classNames = [
//           'background',
//           i <= currentSlideNumber - 1 ? 'down-scroll' : '',
//           (i !== totalSlideNumber - 1) && (i >= currentSlideNumber) && (delta >= scrollSensitivitySetting) ? 'up-scroll' : '' // prettier-ignore
//         ]

//         return (
//           <section key={i} className={classNames.join(' ').trim()}>
//             <div className='content-wrapper'>
//               <p className='content-title'>{section.title}</p>
//               <p className='content-subtitle'>{section.subtitle}</p>
//             </div>
//           </section>
//         )
//       })}
//     </div>
//   )
// }

const components = [Hero, Skills, About]

const IndexPage: React.FC = () => {
  const [ticking, setTicking] = useState(false)
  const [delta, setDelta] = useState<number>(0)
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement | any>(null)
  const totalSlideNumber = containerRef?.current?.children?.length

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
      <div
        className='sections-container'
        ref={containerRef}
        onWheel={parallaxScroll}
      >
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
