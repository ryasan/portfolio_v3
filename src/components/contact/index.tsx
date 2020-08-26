import React, { useState, JSXElementConstructor, FormEvent } from 'react'

import Maps from './maps'
import Icon from '../icons'
import './contact.scss'

interface FieldProps {
  El: JSXElementConstructor<HTMLInputElement | HTMLTextAreaElement> | string
  props?: any
}

interface FormProps {
  [name: string]: string
  email: string
  subject: string
  message: string
}

interface ContactProps {
  classNames: string
  componentRef: React.RefObject<HTMLDivElement>
}

const fields: FieldProps[] = [
  { El: 'input', props: { name: 'name', placeholder: 'Name' } },
  { El: 'input', props: { name: 'email', placeholder: 'Email' } },
  { El: 'input', props: { name: 'subject', placeholder: 'Subject' } },
  {  El: 'textarea', props: { name: 'message', placeholder: 'Message', rows: 3 } } // prettier-ignore
]

const ContactComponent: React.FC<ContactProps> = props => {
  const [state, setState] = useState<FormProps>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const handleChange = (e: FormEvent): void => {
    e.persist()
    const target = e.target as HTMLInputElement | HTMLTextAreaElement

    setState(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  return (
    <section className={`contact section ${props.classNames}`}>
      <div className='parallax-wrapper'>
        <div className='contact__inner'>
          <div className='contact__column contact__column--left'>
            <h1 className='contact__title'>Contact Me</h1>
            <p className='contact__paragraph'>
              I am interested in freelance, contract, and full time
              opportunities. I love being an active participant in cool and
              ambitious projects. Please feel free to contact me about whatever!
            </p>
            <form method='post' className='contact__form'>
              {fields.map(({ El, props }, i) => {
                const classNames = ['contact__field', i === activeIdx ? 'active' : ''] // prettier-ignore
                return (
                  <div key={i} className={classNames.join(' ')}>
                    <El
                      {...props}
                      type='text'
                      value={state[props.name]}
                      onFocus={() => setActiveIdx(i)}
                      onBlur={() => setActiveIdx(null)}
                      onChange={handleChange}
                    />
                  </div>
                )
              })}
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
}

export default ContactComponent
