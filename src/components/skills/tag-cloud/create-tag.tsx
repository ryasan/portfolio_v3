import {useRef} from 'react'

import {skills} from '.'

const computePosition = (idx: number, random: boolean = false, size: number) => {
  if (random) idx = Math.floor(Math.random() * (skills.length + 1))

  const phi = Math.acos(-1 + (2 * idx + 1) / skills.length)
  const theta = Math.sqrt((skills.length + 1) * Math.PI) * phi

  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2
  }
}

const createTag = (idx: number, text: string, size: number) => {
  const tagRef = useRef<HTMLDivElement | null>(null)

  return {
    idx: idx,
    text: text,
    opacity: 0,
    filter: 'alpha(opacity=0)',
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
    tagRef: tagRef,
    ...computePosition(idx, false, size)
  }
}

export default createTag
