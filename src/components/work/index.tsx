import React, { useState, useEffect, Fragment } from 'react'

import { classList, sleep } from '../../utils'
import { ProjectItem } from '../slider/slider-items'
import Slider from '../slider'
import Icon from '../icons'
import './work.scss'
import './project.scss'

interface ProjectProps {
    project?: ProjectItem | null
    setProject: (p: null) => void
}

const ProjectDetails: React.FC<ProjectProps> = ({ setProject, project }) => {
    const [active, setActive] = useState<boolean>()
    const [slides, setSlides] = useState<number[]>([])

    const exit = async () => {
        setActive(false)
        setSlides([])
        sleep(200).then(() => setProject(null))
    }

    const rotate = () => {
        setSlides(prev => [...prev.slice(1), prev[0]])
    }

    const renderSlider = (slides: number[], project: ProjectItem) => (
        <Fragment>
            {/* prettier-ignore */}
            <ul className='project__slider'>
                {slides.map((idx, i) => (
                    <li
                        key={idx}
                        className='project__slide-item'
                        style={{
                            transform: `translateX(${ i === 0 ? 50 : 50 + 17.5 * i }rem)`
                        }}>
                        <img
                            src={project.images[idx]}
                            className='project__slide-img'
                        />
                    </li>
                ))}
            </ul>
        </Fragment>
    )

    useEffect(() => {
        if (project) {
            setActive(true)
            setSlides(Array.from(Array(project.images.length).keys()))
        }
    }, [project])

    return (
        <div className={classList({ project: true, active })}>
            <div className='project__icon-container' onClick={exit}>
                <Icon className='project__close-icon' name='close' />
            </div>
            {project && (
                <div className='project__inner'>
                    <h2 className='project__title'>{project.title}</h2>
                    <div className='project__slider-container'>
                        {renderSlider(slides, project)}
                        <Icon
                            name='right-arrow'
                            className='project__btn project__btn--slide'
                            onClick={rotate}>
                            rotate
                        </Icon>
                        <a
                            className='project__btn project__btn--view'
                            onClick={() => window.open(project.url, '_blank')}>
                            VIEW PROJECT
                        </a>
                        <a
                            className='project__btn project__btn--code'
                            onClick={() => window.open(project.repoUrl, '_blank')}>
                            VIEW CODE
                        </a>
                    </div>
                    <div className='project__text'>
                        <div className='project__description-container'>
                            <h3 className='project__text-title'>DEETS</h3>
                            <p className='project__description'>
                                {project.description}
                            </p>
                        </div>
                        <div className='project__tech-list-container'>
                            <h3 className='project__text-title'>
                                TECHNOLOGIES
                            </h3>
                            {
                                <ul className='project__tech-list'>
                                    {project.technologies.map((tech, i) => (
                                        <li
                                            key={i}
                                            className='project__tech-item'>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

interface Props {
    classNames: string
}

const WorkComponent: React.FC<Props> = ({ classNames }) => {
    const [project, setActiveProject] = useState<ProjectItem | null>()
    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        if (project) setModalActive(true)
        else setModalActive(false)
    }, [project])

    return (
        <section className={`work ${classNames}`}>
            <div className='parallax-wrapper'>
                <div
                    className={classList({
                        work__outer: true,
                        hidden: modalActive
                    })}>
                    <div className='work__inner'>
                        <h1 className='work__title'>Works</h1>
                        <Slider
                            modalActive={modalActive}
                            setProject={setActiveProject}
                        />
                    </div>
                </div>

                <ProjectDetails
                    project={project}
                    setProject={setActiveProject}
                />
            </div>
        </section>
    )
}

export default WorkComponent
