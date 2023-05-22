import React, { useEffect, useState } from "react";
import "../Styles/Contact.css";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import CommonSection from "../Shared/CommonSection";
import { ErrorToast, SuccessToast } from "../helper/Toast";

const Contact = () => {
  const socialLinks = [
    {
      url: "https://www.semicolonsolution.com/",
      icon: "ri-facebook-line",
    },
    {
      url: "https://www.semicolonsolution.com/",
      icon: "ri-instagram-line",
    },
    {
      url: "https://www.semicolonsolution.com/",
      icon: "ri-linkedin-line",
    },
    {
      url: "https://www.semicolonsolution.com/",
      icon: "ri-twitter-line",
    },
  ];

  const [show, setShow] = useState(false);

  const [email1, setEmail1] = useState("");
  const [name1, setName1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [message1, setMessage1] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!email1 || !name1 || !phone1 || !message1) {
      ErrorToast("Please enter all data");
    } else {
      let body = {
        name: name1,
        email: email1,
        phone: phone1,
        message: message1,
      };

      fetch("http://localhost:4000/api/v1/contacts", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          SuccessToast("Message Send Successfully!!");
          setName1("");
          setEmail1("");
          setPhone1("");
          setMessage1("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CommonSection title={"Contact Us"} />

      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4 ps-3 fs-3">Get In Touch</h6>

              <Form method="POST" className="ps-3">
                <FormGroup className="contact_form">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    className="text-capitalize"
                    required
                  ></Input>
                </FormGroup>

                <FormGroup className="contact_form">
                  <Input
                    type="email"
                    name="email"
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    placeholder="Email"
                    required
                  ></Input>
                </FormGroup>

                <FormGroup className="contact_form">
                  <Input
                    type="number"
                    name="phone"
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                    placeholder="Phone"
                    maxLength="10"
                    required
                  ></Input>
                </FormGroup>

                <FormGroup className="contact_form">
                  <Input
                    rows={5}
                    type="textarea"
                    placeholder="Message"
                    name="message"
                    value={message1}
                    onChange={(e) => setMessage1(e.target.value)}
                    className="textarea text-capitalize"
                  ></Input>
                </FormGroup>

                <button
                  className="contact_btn"
                  type="submit"
                  onClick={handlesubmit}
                >
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact_info ms-4 mt-5 mb-2">
                <h6 className="fw-bold fs-5">Contact Information :</h6>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span>
                    <i
                      style={{ color: "#16a085" }}
                      className="ri-road-map-fill"
                    ></i>
                  </span>
                  <p
                    style={{ marginTop: -5 }}
                    className="section_description mb-0"
                  >
                    Mumbai, India.
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2 mb-1">
                  <span>
                    <i
                      style={{ color: "#16a085" }}
                      className="ri-phone-fill"
                    ></i>
                  </span>
                  <p
                    style={{ marginTop: -5 }}
                    className="section_description mb-0"
                  >
                    +91 946-384-5842
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span>
                    <i
                      style={{ color: "#16a085" }}
                      className="ri-mail-line"
                    ></i>
                  </span>
                  <p
                    style={{ marginTop: -5 }}
                    className="section_description mb-0 "
                  >
                    tripzen@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4 fs-5">Follow Us</h6>
                <div className="d-flex align-items-center gap-4">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social_link-icon"
                      target="__blank"
                    >
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
