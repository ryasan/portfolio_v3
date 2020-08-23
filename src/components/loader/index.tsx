import React from 'react'

import Icon from '../icons'
import './loader.scss'

const LoaderComponent: React.FC<any> = ({ loading }) => (
  <div className='loader'>
    <Icon name='light-bulb' />
    <div className='loader__bar'></div>
  </div>
)

export default LoaderComponent
