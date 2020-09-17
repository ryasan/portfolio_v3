import React from 'react'

import './skills.scss'
import TagCloud from './tag-cloud'

interface SkillsInterface {
    classNames: string
}

const SkillsComponent: React.FC<SkillsInterface> = ({ classNames }) => (
    <section className={`skills ${classNames}`}>
        <div className='parallax-wrapper'>
            <div className='skills__outer'>
                <div className='skills__inner'>
                    <div className='skills__column skills__column--left'>
                        <div className='skills__tag-cloud-container'>
                            <TagCloud />
                        </div>
                    </div>
                    <div className='skills__column skills__column--right'>
                        <h1 className='skills__title'>
                            Skills &<br />
                            Experience
                        </h1>
                        <div className='skills__text-container'>
                            <p className='skills__paragraph'>
                                At the time of writing this my primary skills
                                fall mostly under the frontend spectrum of the
                                tech variety. However, I have experience in all
                                areas of the stack and continue to learn the
                                frontend, backend, and everything in between.
                            </p>
                            <p className='skills__paragraph'>
                                My most recent projects have involved
                                technologies like React, GraphQL, Prisma, CSS
                                Tailwind, and D3. At the moment
                                I'm pretty huge on GraphQL and believe it is the
                                future of REST if it isn't already.
                            </p>
                            <p className='skills__paragraph'>
                                I've been part of teams employing scrum
                                methodologies, involved in the feature planning
                                processes, Git rebase and merge workflows...the
                                list goes on. If ever I have the opportunity to
                                work with you, you'll quickly find that I give
                                everything my all and put forth max effort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SkillsComponent
