import React, { useState, useEffect } from 'react'

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
    const [slides, setSlides] = useState<number[]>([0, 1, 2, 3, 4])

    const exit = async () => {
        setActive(false)
        sleep(200).then(() => setProject(null))
    }

    const rotate = () => {
        setSlides(prev => [...prev.slice(1), prev[0]])
    }

    useEffect(() => {
        if (project) {
            setActive(true)
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
                        {/* prettier-ignore */}
                        <ul className='project__slider'>
                            {slides.map((idx, i) => (
                                <li
                                key={idx}
                                className='project__slide-item'
                                    style={{
                                        transform: `translateX(${i === 0 ? 50 : 50 + (17.5 * i)}rem)`
                                    }}>
                                    <img
                                        src={project.images[idx]}
                                        className='project__slide-img'
                                    />
                                </li>
                            ))}
                        </ul>
                        <Icon name='right-arrow' className='project__slide-btn' onClick={rotate}>
                            rotate
                        </Icon>
                    </div>
                    <div className='project__text'>
                        <p className='project__description'>
                            {project.description}
                        </p>
                        <ul className='project__tech-list'>
                            {project.technologies.map((tech, i) => (
                                <li key={i} className='project__tech-item'>
                                    {tech}
                                </li>
                            ))}
                        </ul>
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
