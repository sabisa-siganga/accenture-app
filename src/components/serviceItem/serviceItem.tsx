import React from "react";

interface Props {
  image: string;
  title: string;
  description: string;
}

/**
 * Reusable component that represents service item
 */
const ServiceItem = (props: Props) => {
  // props desctructuring
  const { image, title, description } = props;
  return (
    <div className="service-item  col-sm-12 col-md-6 col-lg-3">
      <img src={image} alt="icon" />
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
