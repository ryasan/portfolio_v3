import React from 'react'

import HeroSvg from './hero'

type SvgProps = {
  name: string
  className: string
}

const SvgImage: React.FC<SvgProps> = props => {
  switch (props.name) {
    case 'hero':
    default:
      return <HeroSvg {...props} />
  }
}

export default SvgImage
