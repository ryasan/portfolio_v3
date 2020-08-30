import React from 'react'

import Icon from '../icons'
import './loader.scss'

const LoaderComponent: React.FC = () => (
    <div className='loader'>
        <Icon name='light-bulb' />
        <div className='loader__bar' />
    </div>
)

export default LoaderComponent
