import React from "react";
import "./slide.scss";

interface Props {
  image: string;
  title: string;
  description: string;
}

/**
 * Reusable component that represents individual case study
 */
const Slide = (props: Props) => {
  // props destructuring
  const { image, title, description } = props;
  return (
    <div className="slide-container">
      <img src={image} alt="olymp" />

      <div className="slide-text">
        <div className="rectangle"></div>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Slide;
