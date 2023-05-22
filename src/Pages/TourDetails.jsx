import React, { useState, useContext } from "react";
import "../Styles/TourDetails.css";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Components/Booking/Booking";
import Newsletter from "../Shared/Newsletter";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";
import { useEffect } from "react";
import { AuthContext } from "./../context/AuthContext";
import { SuccessToast, ErrorToast } from "../helper/Toast";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { RiArrowDropRightFill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Flight from "./Flight";
import Hotel from "./Hotel";

const TourDetails = () => {
  const { id } = useParams();
  const [reviewMsgRef, setReviewMsgRef] = useState("");
  const [tourRating, setTourRating] = useState(null);
  const [comment, setComment] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  // fetch data from database

  const getComment = async () => {
    await axios
      .get(`${BASE_URL}/tours/${id}`)
      .then((res) => {
        setComment(res?.data?.data?.reviews);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    photo,
    title,
    desc,
    place,
    price,
    duration,
    address,
    hotel,
    flight,
    reviews,
    city,
    distance,
    maxGroupSize,
    schedule,
  } = tour;

  localStorage.setItem("title", title);
  localStorage.setItem("photo", photo);
  localStorage.setItem("city", city);

  // const day = duration?.split("/")[1];
  // const totalday = day?.split("")[0];

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const [previewImg, setPreviewImg] = useState(photo);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef;
    try {
      if (!user || user === undefined || user === null) {
        navigate("/login");
      }
      const reviewObj = {
        userName: userData?.userName,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          authorization: localStorage.getItem("token"),
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) {
        return ErrorToast(result.message);
      }
      SuccessToast(result.message);
      getComment();
      setReviewMsgRef("");
    } catch (err) {
      ErrorToast(err?.message);
    }
  };

  useEffect(() => {
    submitHandler();
    window.scrollTo(0, 0);
    setPreviewImg(photo);
  }, [tour]);

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src={previewImg} alt="" />
                  <div className="content1">
                    <div
                      className="tour_content1"
                      onClick={() => setPreviewImg(tour.photo)}
                    >
                      <img src={tour.photo} alt="" />
                    </div>
                    <div
                      className="tour_content2"
                      onClick={() => setPreviewImg(tour.photo1)}
                    >
                      <img src={tour.photo1} alt="" />
                    </div>
                    <div
                      className="tour_content3"
                      onClick={() => setPreviewImg(tour.photo2)}
                    >
                      <img src={tour.photo2} alt="" />
                    </div>
                    <div
                      className="tour_content4"
                      onClick={() => setPreviewImg(tour.photo3)}
                    >
                      <img src={tour.photo3} alt="" />
                    </div>
                    <div
                      className="tour_content5"
                      onClick={() => setPreviewImg(tour.photo4)}
                    >
                      <img src={tour.photo4} alt="" />
                    </div>
                  </div>
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                  >
                    <Tab
                      style={{ fontWeight: "normal" }}
                      eventKey="home"
                      title="Details"
                    >
                      <div className="tour_info">
                        <h2>{title}</h2>
                        <div className="d-flex align-items-center gap-5">
                          <span className="tour_rating d-flex align-item-center gap-1">
                            <i className="ri-star-fill text-warning"></i>
                            {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? (
                              "Not rated"
                            ) : (
                              <span>({reviews?.length})</span>
                            )}
                          </span>
                          <span className="texta">
                            <i className="ri-map-pin-user-fill"></i>
                            {address}
                          </span>
                        </div>
                        <div className="tour_extra-details">
                          <span>
                            <i className="ri-map-pin-2-line"></i> {city}
                          </span>
                          <span>
                            <i className="ri-money">
                              <HiOutlineCurrencyRupee
                                style={{ marginTop: "-6px", fontSize: 18 }}
                              />
                            </i>
                            {price} /per person
                          </span>
                          <span>
                            <i className="ri-map-pin-time-line"></i> {distance}{" "}
                            k/m
                          </span>
                          <span>
                            <i className="ri-group-line"></i> {maxGroupSize}{" "}
                            people
                          </span>
                        </div>
                        <div className="tour_extra-details1">
                          <span>
                            <i className="ri-calendar-todo-fill"></i> {duration}
                          </span>
                          <span>
                            <i className="ri-taxi-fill"></i> (Cab) +
                            <i className="ri-restaurant-fill"></i> (Breakfast)
                          </span>
                        </div>
                        <div className="tour_extra-details2">
                          <span>
                            <i className="ri-hotel-fill"></i> {hotel}
                          </span>
                          <span>
                            <i className="ri-flight-takeoff-fill"></i> {flight}
                          </span>
                        </div>
                        <h5>Description</h5>
                        <p style={{ marginBottom: "2.5rem" }}>{desc}</p>
                        <h5>Places to Visit</h5>
                        <p style={{ marginBottom: "2.5rem" }}>{place}</p>
                        <h5 className="mb-4">Activity</h5>
                        <div>
                          {schedule?.length > 0 &&
                            schedule?.map((v, i) => {
                              return (
                                <div key={i}>
                                  <div
                                    className="accordion-item"
                                    style={{ marginLeft: "-10px" }}
                                  >
                                    <h2
                                      className="accordion-header"
                                      id={"heading" + i}
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={"#collapse" + i}
                                        aria-expanded="false"
                                        aria-controls={"collapse" + i}
                                      >
                                        <RiArrowDropRightFill className="fs-1" />
                                        {v?.day} : {v?.atitle}
                                      </button>
                                    </h2>
                                    <div
                                      id={"collapse" + i}
                                      className="accordion-collapse collapse"
                                      aria-labelledby={"heading" + i}
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body">
                                        <div className="d-flex mt-4 ms-3">
                                          <img
                                            src={v?.img}
                                            style={{
                                              width: "30%",
                                              height: "28vh",
                                            }}
                                            alt=""
                                          />
                                          <div>
                                            <span className="ms-3 mb-3">
                                              <div
                                                style={{
                                                  color: "#000",
                                                  fontSize: "1rem",
                                                }}
                                              >
                                                {v?.message1}
                                              </div>
                                            </span>
                                            <span className="ms-3 mb-3">
                                              <div
                                                style={{
                                                  color: "#000",
                                                  fontSize: "1rem",
                                                }}
                                              >
                                                {v?.message2}
                                              </div>
                                            </span>
                                            <span className="ms-3 mb-3">
                                              <div
                                                style={{
                                                  color: "#000",
                                                  fontSize: "1rem",
                                                }}
                                              >
                                                {v?.message3}
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="flight" title="Flight">
                      <Flight />
                    </Tab>
                    <Tab eventKey="hotel" title="Hotel">
                      <Hotel />
                    </Tab>
                  </Tabs>

                  {/* ============ tour reviews section start ============ */}
                  <div className="tour_reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                        <span onClick={() => setTourRating(1)}>
                          1 <i className="ri-star-s-fill text-warning"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <i className="ri-star-s-fill text-warning"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <i className="ri-star-s-fill text-warning"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <i className="ri-star-s-fill text-warning"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <i className="ri-star-s-fill text-warning"></i>
                        </span>
                      </div>
                      <div className="review_input">
                        <input
                          type="text"
                          value={reviewMsgRef}
                          onChange={(e) => {
                            setReviewMsgRef(e.target.value);
                          }}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user_reviews">
                      {comment?.map((review) => (
                        <div className="review_item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.userName}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-Us", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill text-warning"></i>
                              </span>
                            </div>
                            <h6 className="mt-3">{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ============ tour reviews section end ============ */}
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};
export default TourDetails;
