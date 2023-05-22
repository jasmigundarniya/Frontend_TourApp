import React, { useEffect } from "react";
import "../Styles/Home.css";

import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../Shared/Subtitle";

import SearchBar from "../Shared/SearchBar";
import ServiceList from "../Services/ServiceList";
import FeaturedTourList from "../Components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../Components/image-gallery/MasonryImagesGallery";
import Testinomials from "../Components/Testimonial/Testimonials";
import Newsletter from "../Shared/Newsletter";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {/* ============ hero section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <span className="st">
                    <Subtitle subtitle={"Know Before You Go"} />
                  </span>
                  <img className="image" src={worldImg} alt="" />
                </div>

                <h1 className="fs-1">
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Adventure can be the feeling of going outdoors and engaging in
                  a new activity. Children may associate the thrill of going out
                  There can be various Going outdoors on a romp With Adventure.
                  It can be adventurous for some to be present amidst a new
                  crowd of people.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box hero_video-box mt-5">
                <video autoPlay loop muted>
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ============ hero section end ============ */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle st">What we serve</h5>
              <h2 className="services_title fs-2 st">
                We offer our <br /> best services
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="feature-text1">
                <Subtitle subtitle={"Explore"} />
              </div>
              <h2 className="featured_tour-title fs-2">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <div className="exp">
                  <Subtitle subtitle={"Experience"} />
                </div>

                <h2 className="fs-2">
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Traveling is a humbling experience. It always leaves you with{" "}
                  <br />
                  one thought: my life may not be perfect, but I am blessed.
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============ */}

      {/* ============ gallery section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="gallery-text">
                <Subtitle subtitle={"Gallery"} />
              </div>
              <h2 className="gallery_title fs-2">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ gallery section end ============ */}

      {/* ============ testimonial section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="fans">
                <Subtitle subtitle={"Fans Love"} />
              </div>
              <h2 className="testinomial_title fs-2">
                What our fans say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testinomials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ============ */}
      <Newsletter />
    </>
  );
};

export default Home;
