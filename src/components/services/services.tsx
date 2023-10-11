import React from 'react'
import './services.scss';
import Title from '../title/title';
import webDevIcon from '../../assets/web-dev-icon.png';
import uxIcon from '../../assets/ux-icon.png';
import appDevIcon from '../../assets/app-dev-icon.png';
import blockchainIcon from '../../assets/icon.png';
import ServiceItem from '../serviceItem/serviceItem';



const Services = () => {
    const serviceItems = [
        {
         "image": webDevIcon,
         "title" : "Web Development",
         "description": "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
         
            },
        {
         "image": uxIcon,
         "title" : "User experience & design",
         "description": "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
         
            },
        {
         "image":  appDevIcon,
         "title" : "Mobile app Development",
         "description": "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."
         
            },
        {
         "image": blockchainIcon,
         "title" : "Blockchain Solutions",
         "description": "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
         
            },
    ]
  return (
    <div id='services' className='services-container'>
        <Title title="What we do"/>
        <h1>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
       <div className='row'>
           {  serviceItems.map((item, index)=>{
                return(
                   <ServiceItem 
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    key={index}
                   />
                )
                })
             }
        
       </div>
    </div>
  )
}

export default Services