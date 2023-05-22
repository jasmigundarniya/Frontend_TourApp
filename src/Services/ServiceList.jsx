import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Planning a better road trip with weather. Wherever you go, no matter what the weather, always bring your own sunshine.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Energetic and resourceful tour guide with several years of experience accompanying clients.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Suit your needs, your holiday wish lists, your preferred style of travel, your interests and your schedule.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
