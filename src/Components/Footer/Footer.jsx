import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tripzen.png";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/contactus",
    display: "Contact Us",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" className="mb-4" style={{ marginRight: 130 }}>
            <div>
              <img
                className="logo1"
                style={{ width: "50%" }}
                src={logo}
                alt=""
              />
              <p>
                Tripzen is a technology company focused on empowering world
                travellers to plan, book and manage their trips across car, air
                and hotels. Our vision is to become the most customer-centric
                travel company,
                <br /> by offering the best customer experience to our users.
              </p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="2" className="mb-4">
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" className="mb-4">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" className="mb-4">
            <h5 className="footer_link-title">Contact</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className="mb-0 d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-road-map-fill"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0" style={{ marginTop: -1.2 }}>
                  Mumbai, India.
                </p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className="mb-0 d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0" style={{ marginTop: -2.5 }}>
                  tripzen@gmail.com
                </p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className="mb-0 d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0" style={{ marginTop: -1.2 }}>
                  +91 9463845842
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
