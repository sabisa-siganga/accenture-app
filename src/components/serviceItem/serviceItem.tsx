import React from 'react'
import './serviceItem.scss';

interface props{
    image: string;
    title: string;
    description: string
}

function ServiceItem(props:props) {
    const {image, title, description} = props
  return (
    <div className="service-item  col-sm-12 col-md-6 col-lg-3">
    <img src={image} alt="webDevIcon" />
    <h6>{title}</h6>
    <p>{description}</p>
</div>
  )
}

export default ServiceItem