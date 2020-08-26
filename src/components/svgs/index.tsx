import React from 'react'

import HeroSvg from './hero'

type SvgType = {
  name: string
  className: string
}

const SvgImage: React.FC<SvgType> = props => {
  switch (props.name) {
    case 'hero':
    default:
      return <HeroSvg {...props} />
  }
}

export default SvgImage
