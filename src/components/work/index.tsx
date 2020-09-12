import React, { useState, useEffect } from 'react'
import { classList, sleep } from '../../utils'

import Slider from '../slider'
import Icon from '../icons/'
import './work.scss'

interface ProjectItem {
    text: string
    image: string
}

interface ProjectProps {
    project?: ProjectItem | null
    unsetProject: () => void
}

const ProjectDetails: React.FC<ProjectProps> = ({ unsetProject, project }) => {
    const [active, setActive] = useState(!!project)

    const exit = () => {
        setActive(false)
        sleep(300).then(unsetProject)
    }

    useEffect(() => {
        if (project) setActive(true)
    }, [project])

    return (
        <div className={classList({ project: true, active })}>
            <div className='project__icon-container' onClick={exit}>
                <Icon name='close' />
            </div>
            {project && (
                <div className='project__inner'>
                    <h2 className='project__title'>{project.text}</h2>
                    <div className='project__column-container'>
                        <div className='project__column project__column--left'>
                            <div className='project__main-img-container'>
                                <img
                                    src={project.image}
                                    alt={project.text}
                                    className='project__main-img'
                                />
                            </div>
                        </div>
                        <div className='project__column project__column--right'></div>
                    </div>
                </div>
            )}
        </div>
    )
}

type WorkType = {
    classNames: string
}

const WorkComponent: React.FC<WorkType> = ({ classNames }) => {
    const [project, setActiveProject] = useState<ProjectItem | null>(null)
    const [modalActive, setModalActive] = useState(false)

    const setProject = (p: ProjectItem | null) => () => {
        setActiveProject(p)
    }

    const unsetProject = () => setActiveProject(null)

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
                            setProject={setProject}
                        />
                    </div>
                </div>

                <ProjectDetails project={project} unsetProject={unsetProject} />
            </div>
        </section>
    )
}

export default WorkComponent
