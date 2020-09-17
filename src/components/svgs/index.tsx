import React from 'react'

import HeroSvg from './hero'
import MeSvg from './me'

type SvgType = {
    name: string
    className?: string
}

const SvgImage: React.FC<SvgType> = props => {
    switch (props.name) {
        case 'hero':
        default:
            return <HeroSvg {...props} />
        case 'me':
            return <MeSvg {...props} />
    }
}

export default SvgImage
