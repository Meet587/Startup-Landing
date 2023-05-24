import React from "react";
import Heading from "../../Components/Heading/Heading";
import style from "./services.module.scss";
import { ServiceCard, ServiseData } from "./ServiceCard";

const Services = () => {
  return (
    <div className={`${style.service}`}>
      <div className={`${style.heading} mx-auto`}>
        <Heading
          mainheading={"Why you choose TheCoin"}
          mainSize={"20px"}
          subheading={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          subSize={"14px"}
        />
      </div>
      <div>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
