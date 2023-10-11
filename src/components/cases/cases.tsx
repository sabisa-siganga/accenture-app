import React, { useEffect, useState } from "react";
import "./cases.scss";
import Title from "../title/title";
import Slide from "../slide/slide";
import Slider from "react-slick";

interface CaseStudies {
  imageUrl: string;
  title: string;
  description: string;
}

const Cases = () => {
  const [caseList, setCaseList] = useState<CaseStudies[]>([]);

  // Fetching cases using the async await function
  async function fetchCaseStudies() {
    const response = await fetch(
      " https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws"
    );
    // converting response to JSON object
    const results = await response.json();

    // Accessing case studies
    setCaseList(results);
  }

  //   on component mount
  useEffect(() => {
    fetchCaseStudies();
  }, []);

  // Slider setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="cases" className="cases-container">
      <Title title="Case studies" />

      <div className="sliders-container">
        <Slider {...settings}>
          {caseList.map((caseItem, index) => {
            return (
              <Slide
                key={index}
                image={caseItem.imageUrl}
                title={caseItem.title}
                description={caseItem.description}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Cases;
