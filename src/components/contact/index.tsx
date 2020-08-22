import React from 'react'

import './contact.scss'

interface Props {
  classNames: string
}

const ContactComponent: React.FC<Props> = ({ classNames }) => {
  return (
    <section className={`contact section ${classNames}`}>
      <div className='parallax-wrapper'>
        <div className='contact__inner'>
          <div className='contact__column contact__column--left'>left</div>
          <div className='contact__column contact__column--right'>Right</div>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent
