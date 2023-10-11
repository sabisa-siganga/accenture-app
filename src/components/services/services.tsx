import React from 'react'
import './services.scss';
import webDevIcon from '../../assets/web-dev-icon.png'

function Services() {
  return (
    <div id='services'>
        
        <h1>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
        <div>
            <img src={webDevIcon} alt="webDevIcon" />
            <h6>Web development</h6>
            <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
        </div>
    </div>
  )
}

export default Services