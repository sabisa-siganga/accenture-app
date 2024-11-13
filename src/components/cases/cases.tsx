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

// Define the mock data for CaseStudies
const mockCaseStudies = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Case Study 1",
    description:
      "An in-depth look at the first case study, showcasing unique solutions.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1727160930825-97245483a509?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Case Study 2",
    description: "Exploring challenges and successes in our second case study.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1730669185590-2ed0736948d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Case Study 3",
    description: "Highlights and takeaways from the third case study.",
  },
];

/**
 * Displaying the case studies
 */
const Cases = () => {
  // state that stores the list of case studies
  const [caseList, setCaseList] = useState<CaseStudies[]>([]);

  /// Mock function with specified return type
  async function fetchMockCaseStudies(): Promise<CaseStudies[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCaseStudies);
      }, 500); // 500ms delay to simulate a real API call
    });
  }

  // Usage in component
  useEffect(() => {
    const getCaseStudies = async () => {
      const results = await fetchMockCaseStudies();
      setCaseList(results as CaseStudies[]); // Type assertion to ensure TypeScript understands the type
    };

    getCaseStudies();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div id="cases" className="cases-container">
      <Title title="Case studies" />

      <div className="sliders-container">
        {/* displaying the case studies as a slider */}
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
