import React, { useState, useRef, useEffect, useCallback } from 'react'

import './tag-cloud.scss'
import createTag from './create-tag'

export const texts: string[] = [
  'React',
  'GraphQL',
  'TypeScript',
  'Prisma',
  'Apollo',
  'NodeJS',
  'Express',
  'JWT',
  'Figma',
  'Git',
  'Netlify',
  'Heroku',
  'Angular',
  'SSR',
  '_Lodash',
  'Python',
  'Redux',
  'REST',
  'Cloudinary',
  'Firebase',
  'SCSS',
  'TDD',
  'Ionic'
]

// prettier-ignore
const on = (el: any, ev: string, handler: (ev: MouseEvent) => void, cap?: boolean) => { 
  if (el.addEventListener) {
    el.addEventListener(ev, handler, cap)
  } else if (el.attachEvent) {
    el.attachEvent(`on${ev}`, handler)
  } else {
    el[`on${ev}`] = handler
  }

  return () => el.removeEventListener(ev, handler, cap)
}

interface SpeedProps {
  slow: number
  normal: number
  fast: number
}

const getMaxSpeed = (name: string) => {
  return { slow: 1, normal: 5, fast: 10 }[name as keyof SpeedProps]
}

const getInitSpeed = (name: string) => {
  return { slow: 10, normal: 20, fast: 40 }[name as keyof SpeedProps]
}

const defaultConfig = {
  radius: 300 as number,
  maxSpeed: 'slow' as string,
  initSpeed: 'slow' as string,
  direction: 135 as number,
  keep: 100 as number
}

interface ItemProps {
  transform: string
  opacity: number
  filter: string
  scale?: number
  idx: number
  text: string
  x: number
  y: number
  z: number
  tagRef?: React.RefObject<HTMLSpanElement>
}

const createInitialState = (size: number) => {
  return texts.map((text, i) => {
    return createTag(i, text, size)
  })
}

const TagCloudComponent: React.FC = React.memo(() => {
  const tagCloudRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState<boolean>(false)
  const { radius, maxSpeed, initSpeed, direction, keep } = defaultConfig

  const depth = 2 * radius
  const size = 1.5 * radius
  const _maxSpeed = getMaxSpeed(maxSpeed)
  const _initSpeed = getInitSpeed(initSpeed)
  const mouseX0 = _initSpeed * Math.sin(direction * (Math.PI / 180))
  const mouseY0 = -_initSpeed * Math.cos(direction * (Math.PI / 180))
  const mouseX = useRef<number>(mouseX0)
  const mouseY = useRef<number>(mouseY0)

  const [items, setItems] = useState<ItemProps[] | null>(
    createInitialState(size)
  )

  const next = useCallback(() => {
    // prettier-ignore
    if (!keep && !active) {
      mouseX.current = Math.abs(mouseX.current - mouseX0) < 1 ? mouseX0 : (mouseX.current + mouseX0) / 2 // reset distance between the mouse and rolling center x axis
      mouseY.current = Math.abs(mouseY.current - mouseY0) < 1 ? mouseY0 : (mouseY.current + mouseY0) / 2 // reset distance between the mouse and rolling center y axis
    }

    const a = -(Math.min(Math.max(mouseY.current, size), size) / radius) * _maxSpeed; // prettier-ignore
    const b = (Math.min(Math.max(mouseX.current, size), size) / radius) * _maxSpeed; // prettier-ignore

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return // pause

    // calculate offset
    const l = Math.PI / 180
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l)
    ]

    setItems((prev: any[] | null) => {
      const items = (prev || []).map(item => {
        const rx1 = item.x
        const ry1 = item.y * sc[1] + item.z * -sc[0]
        const rz1 = item.y * sc[0] + item.z * sc[1]
        const rx2 = rx1 * sc[3] + rz1 * sc[2]
        const ry2 = ry1
        const rz2 = rz1 * sc[3] - rx1 * sc[2]
        const per = (2 * depth) / (2 * depth + rz2)

        item.x = rx2
        item.y = ry2
        item.z = rz2
        item.scale = Number(per.toFixed(3))

        let alpha = per * per - 0.25
        alpha = Number((alpha > 1 ? 1 : alpha).toFixed(3))

        if (item?.tagRef?.current) {
          const left = (item.x - item.tagRef.current.offsetWidth / 2).toFixed(2)
          const top = (item.y - item.tagRef.current.offsetHeight / 2).toFixed(2)
          return {
            ...item,
            x: rx2,
            y: ry2,
            z: rz2,
            opacity: alpha,
            transform: `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`,
            filter: `alpha(opacity=${100 * alpha})`
          }
        }
      })

      return items
    })
  }, [])

  useEffect(() => {
    if (tagCloudRef?.current) {
      const tg = tagCloudRef.current
      on(tg, 'mouseover', () => setActive(true))
      on(tg, 'mouseout', () => setActive(false))
      on(keep ? window : tg, 'mousemove', ev => {
        ev = ev || window.event
        const rect = tg.getBoundingClientRect()
        mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5
        mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5
      })

      next()
      const interval = setInterval(next, 100)
      return () => clearInterval(interval)
    }
  }, [tagCloudRef])

  return (
    <div
      ref={tagCloudRef}
      className='tag-cloud'
      style={{
        position: 'relative',
        width: `${2 * radius}px`,
        height: `${2 * radius}px`
      }}
    >
      {items &&
        items.map(item => {
          return (
            <span
              key={item.idx}
              className='tag-cloud__item'
              ref={item.tagRef}
              style={{
                filter: item.filter,
                opacity: item.opacity,
                transform: item.transform
              }}
            >
              {item.text}
            </span>
          )
        })}
    </div>
  )
})

export default TagCloudComponent
