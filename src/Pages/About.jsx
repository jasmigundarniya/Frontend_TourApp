import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Newsletter from "../Shared/Newsletter";
import CommonSection from "../Shared/CommonSection";

import trip from "../assets/images/week-trip.jpg";
import banner from "../assets/images/banner.jpg";
import abroad from "../assets/images/abroad.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <CommonSection title={"About Us"} />

      <section>
        <Container>
          <Row>
            <img src={trip} alt="" />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <img src={banner} alt="" />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2
            style={{
              fontFamily: "Mistral",
              // textTransform: "uppercase",
              wordSpacing: 4,
              fontSize: 40,
            }}
            className="text-center mb-4"
          >
            Places To See In 2022
          </h2>
          <Row
            style={{ boxShadow: "0 2px 8px 2px rgba(178, 178, 178, 0.406)" }}
          >
            <img src={abroad} alt="" />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Newsletter />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
