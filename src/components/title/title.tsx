import React from "react";
import "./title.scss";

interface Props {
  title: string;
}

/**
 * Reusable component that represents the title of each section
 */
const Title = (props: Props) => {
  const { title } = props;
  return (
    <div className="title">
      <div className="rectangle"></div>
      <h5>{title}</h5>
    </div>
  );
};

export default Title;
