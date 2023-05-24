import React from "react";
import Heading from "../../Components/Heading/Heading";
import style from "./services.module.scss";
import { ServiceCard, ServiseData } from "./ServiceCard";
import graph from "../../asset/imgs/graph";

const Services = () => {
  return (
    <div className={`${style.service}`}>
      <div className={`d-flex justify-content-center`}>
        <Heading
          mainheading={"Why you choose TheCoin"}
          subHeadStyle={{ fontSize: "14px" }}
          subheading={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          mainHeadstyle={{ fontSize: "20px", textAlign: "center" }}
        />
      </div>
      <div className={`${style.service_container} `}>
        <ServiceCard />
      </div>
      <Row>
        <Col md="12" lg="6">
          <div>
            <img src="" alt="" />
          </div>
        </Col>
        <Col md="12" lg="6"></Col>
      </Row>
    </div>
  );
};

export default Services;
