import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../asstes/avatar1.jpg'

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar one" />
          </div>
          <h5 className='Client__name'>Nattpong Phoorisri</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, 
              itaque. Voluptate magnam, nulla numquam cum vel neque, 
              perspiciatis, nobis aliquid voluptas voluptatibus similique aut praesentium eveniet modi ipsam qui. Exercitationem!
            </small>
        </article>
      </div>
    </section>
  )
}

export default testimonials