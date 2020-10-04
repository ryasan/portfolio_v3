import React from 'react'

import './workstation.scss'

const WorkstationIllustration: React.FC = () => {
    return (
        <div className='wrapper'>
            {/* <div className='board'>
                <div className='board__stacked-papers'></div>
            </div> */}

            <div className='my-stuff'>
                {/* <div></div> */}
                <div className='my-stuff__screen my-stuff__screen--horizontal'>
                    <div className='my-stuff__screen-inner my-stuff__screen-inner--horizontal'>
                        <div className='my-stuff__track my-stuff__track--horizontal'>
                            <div className='my-stuff__code my-stuff__code--horizontal'></div>
                            <div className='my-stuff__code my-stuff__code--horizontal'></div>
                            <div className='my-stuff__code my-stuff__code--horizontal'></div>
                        </div>
                        <div className='my-stuff__frame my-stuff__frame--horizontal'></div>
                    </div>
                    <div className='my-stuff__base my-stuff__base--horizontal'>
                        <div className='my-stuff__base-bottom my-stuff__base-bottom--horizontal'></div>
                    </div>
                </div>
                <div className='my-stuff__screen my-stuff__screen--vertical'>
                    <div className='my-stuff__screen-inner my-stuff__screen-inner--vertical'>
                        <div className='my-stuff__track my-stuff__track--vertical'>
                            <div className='my-stuff__code my-stuff__code--vertical'></div>
                            <div className='my-stuff__code my-stuff__code--vertical'></div>
                            <div className='my-stuff__code my-stuff__code--vertical'></div>
                        </div>
                        <div className='my-stuff__frame my-stuff__frame--vertical'></div>
                    </div>
                    <div className='my-stuff__base my-stuff__base--vertical'>
                        <div className='my-stuff__base-bottom my-stuff__base-bottom--vertical'></div>
                    </div>
                </div>
                <div className='my-stuff__coffee'>
                    <div className='my-stuff__coffee-steam'>S</div>
                    <div className='my-stuff__coffee-handle'></div>
                </div>
            </div>

            <div className='desk'>
                <div className='desk__table-top'></div>
                <ul className='desk__drawer'>
                    <li className='desk__drawer-face'></li>
                    <li className='desk__drawer-face'></li>
                    <li className='desk__drawer-face'></li>
                </ul>
            </div>

            <div className='chair'>
                <div className='chair__back-post'></div>
                <div className='chair__seat'></div>
                <div className='chair__tripod'>
                    <div className='chair__tripod-leg chair__tripod-leg--left'></div>
                    <div className='chair__tripod-center'></div>
                    <div className='chair__tripod-leg chair__tripod-leg--right'></div>
                </div>
            </div>
        </div>
    )
}

export default WorkstationIllustration
