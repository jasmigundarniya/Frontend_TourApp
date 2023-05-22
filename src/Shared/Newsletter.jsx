import React from "react";
import "./Newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful travelling information.</h2>

              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>

              <p>
                Always stay up to date on the latest travel and lifestyle
                events, content, community, resources and everything in between!
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="newsletter_img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
