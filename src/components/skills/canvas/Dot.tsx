import { TweenMax, Power0 } from 'gsap'

import { PERSPECTIVE, PROJECTION_CENTER_X, PROJECTION_CENTER_Y } from '.'

const getSkill = (text: any) => {
  const tempCanvas = window.document.createElement('canvas')
  const tempCtx = tempCanvas.getContext('2d')
  tempCanvas.width = 60
  tempCanvas.height = 60

  if (tempCtx) {
    let fontSize = 300
    do {
      fontSize--
      tempCtx.font = `700 ${fontSize}px montserrat`
    } while (tempCtx.measureText(text).width > tempCanvas.width)

    tempCtx.textAlign = 'center'
    tempCtx.textBaseline = 'middle'
    tempCtx.fillStyle = '#fff'
    tempCtx.fillText(text, 30, 35)
  }
  return tempCanvas
}

export const skills: HTMLCanvasElement[] = [
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
].map(getSkill)

const DOT_RADIUS: number = 60

export default class Dot {
  x: number
  y: number
  z: number
  xProjected: number
  yProjected: number
  scaleProjected: number
  globeRadius: number
  theta: number
  phi: number
  skill: any
  constructor (
    public ctx: any,
    public width: number,
    public height: number,
    idx: number
  ) {
    this.theta = Math.random() * 2 * Math.PI
    this.phi = Math.acos(Math.random() * 2 - 1)

    this.skill = skills[idx]

    this.x = (Math.random() - 0.5) * width
    this.y = (Math.random() - 0.5) * height
    this.z = Math.random() * width

    this.globeRadius = width / 2
    this.xProjected = 0
    this.yProjected = 0
    this.scaleProjected = 0

    TweenMax.to(this, Math.random() * 10 + 15, {
      theta: this.theta + Math.PI * 2,
      repeat: -1,
      ease: Power0.easeNone
    })
  }

  project () {
    this.x = this.globeRadius * Math.sin(this.phi) * Math.cos(this.theta)
    this.y = this.globeRadius * Math.cos(this.phi)
    this.z = this.globeRadius * Math.sin(this.phi) * Math.sin(this.theta) + this.globeRadius // prettier-ignore

    this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z)
    this.xProjected = this.x * this.scaleProjected + PROJECTION_CENTER_X
    this.yProjected = this.y * this.scaleProjected + PROJECTION_CENTER_Y
  }

  draw () {
    this.ctx.drawImage(
      this.skill,
      this.xProjected - DOT_RADIUS,
      this.yProjected - DOT_RADIUS,
      DOT_RADIUS * 2 * this.scaleProjected,
      DOT_RADIUS * 2 * this.scaleProjected
    )
  }
}
