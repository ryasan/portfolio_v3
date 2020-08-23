import React, { useEffect, useState, useRef, useCallback } from 'react'

import Dot, { skills } from './Dot'

export let PERSPECTIVE: number
export let PROJECTION_CENTER_X: number
export let PROJECTION_CENTER_Y: number

interface Props {
  width: number
  height: number
}

const CanvasComponent: React.FC<Props> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const requestRef = useRef<number>(0)
  const [ctx, setCtx] = useState<any>()
  const [dots, setDots] = useState<Dot[]>([])

  const render = useCallback(() => {
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      dots.forEach(dot => dot.project())
      dots.forEach(dot => dot.draw())
      requestRef.current = requestAnimationFrame(render)
    }
  }, [ctx, dots, requestRef, width, height])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(requestRef.current)
  }, [ctx, dots, render])

  useEffect(() => {
    if (canvasRef.current) {
      PERSPECTIVE = width * 0.8
      PROJECTION_CENTER_X = width / 2
      PROJECTION_CENTER_Y = height / 2
      setCtx(canvasRef.current.getContext('2d'))
    }
  }, [canvasRef, width, height])

  useEffect(() => {
    if (ctx) {
      setDots(
        skills
          .map((_, idx) => new Dot(ctx, width, height, idx))
          .sort((dotA, dotB) => {
            return dotA.scaleProjected - dotB.scaleProjected
          })
      )
    }
  }, [ctx, height, width])

  return (
    <canvas
      className='skills__sphere'
      ref={canvasRef}
      width={width}
      height={height}
    />
  )
}

// {skills.map((skill, i) => (
//   <DotClassComponent
//     key={i}
//     idx={i}
//     ctx={ctx}
//     canvasRef={canvasRef}
//     height={height}
//     width={width}
//   />
// ))}

export default CanvasComponent
