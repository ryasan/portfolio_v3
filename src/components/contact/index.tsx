import React from 'react'

import Maps from './maps'
import Icon from '../icons'
import './contact.scss'

interface Props {
  classNames: string
  componentRef: React.RefObject<HTMLDivElement>
}

const ContactComponent: React.FC<Props> = props => (
  <section className={`contact section ${props.classNames}`}>
    <div className='parallax-wrapper'>
      <div className='contact__inner'>
        <div className='contact__column contact__column--left'>
          <h1 className='contact__title'>Contact Me</h1>
          <p className='contact__paragraph'>
            I am interested in freelance, contract, and full time opportunities.
            I love being an active participant in cool and ambitious projects.
            Please feel free to contact me about whatever!
          </p>
          {/* prettier-ignore */}
          <form method='post' className='contact__form'>
                <div className='contact__field'>
                  <input type='text' placeholder='Name' className='contact__input' />
                </div>
                <div className='contact__field'>
                  <input type='text' placeholder='Email' className='contact__input' />
                </div>
                <div className='contact__field'>
                  <input type='text' placeholder='Subject' className='contact__input' />
                </div>
                <div className='contact__field'>
                  <textarea placeholder='Message' rows={3} className='contact__textarea' />
                </div>
              </form>
        </div>
        <div className='contact__column contact__column--right'>
          <div className='contact__maps' ref={props.componentRef}>
            <Maps markerIsShowing />
            <div className='contact__info'>
              <div className='contact__name'>Ryan Santos</div>
              <div className='contact__city'>Los Angeles</div>
              <div className='contact__email'>
                <span>@</span> ryansantos86@gmail.com
              </div>
              <Icon name='light-bulb' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ContactComponent
