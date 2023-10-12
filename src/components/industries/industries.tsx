import React from "react";
import "./industries.scss";
import Title from "../title/title";
import visa from "../../assets/visa.svg";
import tymebank from "../../assets/tymebank.svg";
import distell from "../../assets/distell.svg";
import spotify from "../../assets/spotify.svg";
import microsoft from "../../assets/microsoft.svg";
import engen from "../../assets/engen.svg";
import nike from "../../assets/nike.svg";
import wesgro from "../../assets/wesgro.svg";
import multichoice from "../../assets/multichoice.svg";
import picknpay from "../../assets/picknpay.svg";
import liquid from "../../assets/liquid.svg";
import tfg from "../../assets/tfg.svg";
import sanlam from "../../assets/sanlam.svg";
import santam from "../../assets/santam.svg";
import bbc from "../../assets/bbc.svg";

/**
 *  Displaying the industries section
 */
const Industries = () => {
  // list of brands
  const brands = [
    visa,
    tymebank,
    distell,
    spotify,
    microsoft,
    engen,
    nike,
    wesgro,
    multichoice,
    picknpay,
    liquid,
    tfg,
    sanlam,
    santam,
    bbc,
  ];

  return (
    <div id="industries" className="industries-container">
      <Title title="You’ll be in good company" />
      <h1>Trusted by leading brands</h1>
      <div className="brands-container">
        {/* displaying the brands */}
        {brands.map((brand, index) => {
          return <img src={brand} alt="brand" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Industries;
