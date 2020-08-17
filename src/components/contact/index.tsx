import React from 'react'

import './contact.scss'

interface Props {
  classNames: string
}

const ContactComponent: React.FC<Props> = ({ classNames }) => {
  return (
    <section className={`contact section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='contact__inner'>Contact me</div>
      </div>
    </section>
  )
}

export default ContactComponent
