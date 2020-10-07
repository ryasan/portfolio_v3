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
import IconComponent from '../components/icons'
import { classList, sleep } from '../utils'
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
    const [isTicking, setIsTicking] = useState(false)
    const [pageIdx, setPageIdx] = useState<number>(0)
    const [_performance, setPerformance] = useState<any>(null)
    const firstRender = useRef<boolean>(true)
    const totalSlideNumber = components.length

    const slideDurationTimeout = (slideDuration: number) => {
        sleep(slideDuration).then(() => setIsTicking(false))
    }

    const parallaxScroll = throttle((e: any) => {
        if (googleMapsRef?.current?.contains(e.target)) return
        const isWheelingDown = -e.deltaY <= 0

        if (isWheelingDown && !isTicking) {
            setIsTicking(true)
            if (pageIdx !== totalSlideNumber - 1) scrollDown()
            slideDurationTimeout(transitionDuration)
        }

        if (!isWheelingDown && !isTicking) {
            setIsTicking(true)
            if (pageIdx !== 0) scrollUp()
            slideDurationTimeout(transitionDuration)
        }
    })

    const scrollDown = (pages: number = 1): void => {
        setPageIdx(prevIdx => Math.min(totalSlideNumber - 1, prevIdx + pages))
    }

    const scrollUp = (pages: number = 1): void => {
        setPageIdx(prevIdx => Math.max(0, prevIdx - pages))
    }

    const handleNavItemClick = (idx: number) => {
        if (idx > pageIdx) scrollDown(idx - pageIdx)
        if (idx < pageIdx) scrollUp(pageIdx - idx)
    }

    useLayoutEffect(() => {
        if (firstRender.current) firstRender.current = false
        else localStorage.setItem('page', JSON.stringify(pageIdx))
    }, [pageIdx])

    useEffect(() => setPerformance(performance), [])

    useEffect(() => {
        if (window?.onbeforeunload) {
            window.onbeforeunload = (): void => localStorage.removeItem('page')
        }
    }, [])

    useEffect(() => {
        if (_performance?.navigation.type === 1) {
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
                {components.map((props: ComponentInterface, i) => (
                    <props.component
                        key={i}
                        componentRef={props.componentRef}
                        classNames={classList({
                            section: true,
                            'down-scroll': i <= pageIdx - 1,
                            'up-scroll':
                                i !== totalSlideNumber - 1 && i >= pageIdx
                        })}
                        handlePageClick={handleNavItemClick}
                    />
                ))}
            </div>
            <div className='mobile-btn-group'>
                <button className='mobile-btn' onClick={() => scrollUp()}>
                    <IconComponent name='chevron-up' />
                </button>
                <button className='mobile-btn' onClick={() => scrollDown()}>
                    <IconComponent name='chevron-down' />
                </button>
            </div>
        </Layout>
    )
}

export default IndexPage
