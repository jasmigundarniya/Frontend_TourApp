import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../Styles/Blog.css";
import { Card, Container } from "reactstrap";
import { useCollapse } from "react-collapsed";

import p1 from "../assets/images/tm-img-01.jpg";
import p2 from "../assets/images/tm-img-02.jpg";
import p3 from "../assets/images/tm-img-03.jpg";
import p4 from "../assets/images/tm-img-04.jpg";
import p5 from "../assets/images/tm-img-05.jpg";
import p6 from "../assets/images/tm-img-06.jpg";
import p7 from "../assets/images/tm-img-07.jpg";
import p8 from "../assets/images/tm-img-08.jpg";
import p9 from "../assets/images/tm-img-09.jpg";
import Carousel from "react-bootstrap/Carousel";

const Blog = () => {
  const image = [
    {
      i1: p1,
      i2: p4,
      i3: p7,
    },
    {
      i1: p2,
      i2: p5,
      i3: p8,
    },
    {
      i1: p3,
      i2: p6,
      i3: p9,
    },
  ];

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CommonSection title={"Blogs"} />

      <Container>
        <div className="tm-page-wrap mx-auto">
          <section className="p-5 tm-container-outer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
                  <h2 className="text-uppercase mb-4">
                    Your <strong>Journey</strong> is our priority
                  </h2>
                  <p className="mb-0">
                    Nullam auctor, sapien sit amet lacinia euismod, lorem magna
                    lobortis massa, in tincidunt mi metus quis lectus. Duis nec
                    lobortis velit. Vivamus id magna vulputate, tempor ante
                    eget, tempus augue. Maecenas ultricies neque magna.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="tm-container-outer" id="tm-section-2">
            <section className="tm-slideshow-section">
              <div className="tm-slideshow">
                <Carousel prevLabel="" nextLabel="">
                  {image.map((v, i) => {
                    return (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={v?.i1} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>

              <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="text-white">Europe's most visited places</h2>
                <p className="cutoff-text">
                  Aenean in lacus nec dolor fermentum congue. Maecenas ut velit
                  pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum
                  mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin
                  interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non
                  pulvinar id, sagittis eget diam.
                </p>
                <input
                  className="expand-btn text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                  type="checkbox"
                />
              </div>
            </section>

            <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse">
              <div className="tm-right tm-slideshow tm-slideshow-highlight">
                <Carousel prevLabel="" nextLabel="">
                  {image.map((v, i) => {
                    return (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={v?.i2} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>

              <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                <h2 className="text-white">Asia's most popular places</h2>
                <p className="cutoff-text1">
                  Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu.
                  Donec sagittis mattis pharetra. Proin commodo, ante et
                  volutpat pulvinar, arcu arcu ullamcorper diam, id maximus sem
                  tellus id sem. Suspendisse eget rhoncus diam. Fusce urna elit,
                  porta nec ullamcorper id.
                </p>
                <input
                  className="expand-btn1 text-uppercase tm-btn tm-btn-white tm-btn-white-highlight"
                  type="checkbox"
                />
              </div>
            </section>

            <section className="tm-slideshow-section">
              <div className="tm-slideshow">
                <Carousel prevLabel="" nextLabel="">
                  {image.map((v, i) => {
                    return (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={v?.i3} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="text-white">America's most famous places</h2>
                <p className="cutoff-text">
                  Donec nec laoreet diam, at vehicula ante. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Suspendisse nec dapibus nunc, quis viverra metus. Morbi
                  eget diam gravida, euismod magna vel, tempor urna.
                </p>
                <input
                  className="expand-btn text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                  type="checkbox"
                />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
