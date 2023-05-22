import React, { useEffect, useState } from "react";
import "../Styles/Flight.css";
import { Container } from "reactstrap";
import { CiPlane } from "react-icons/ci";
import { GoPrimitiveDot } from "react-icons/go";
import { SlPlane } from "react-icons/sl";
import { BiRupee } from "react-icons/bi";
import useFetch from "../hooks/useFetch";
import Swal from "sweetalert2";
import axios from "axios";

const Flight = () => {
  const [flight, setFlight] = useState([]);

  const {
    data: flights,
    loading,
    error,
  } = useFetch("http://localhost:4000/flights");

  const getFlightData = async () => {
    await axios
      .get("http://localhost:4000/flights")
      .then((res) => {
        setFlight(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getFlightData();
  }, []);

  function toggle() {
    Swal.fire("Congratulations", "Your Flight Booked Successfully!", "success");
  }

  const bcity = localStorage.getItem("city");

  return (
    <>
      <section className="flight_info">
        <Container>
          <div>
            <div
              className="container"
              style={{ color: "#000", fontSize: "1rem" }}
            >
              {/* <div className="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
                <div className="col">
                  <div
                    style={{ borderRadius: 5 }}
                    className="p-2 border bg-light"
                  >
                    <span className="fw-bold">From</span>
                    <br />
                    <span className="fw-normal">Mumbai, India</span>
                  </div>
                </div>

                <div className="col">
                  <div
                    style={{ borderRadius: 5 }}
                    className="p-2 border bg-light"
                  >
                    <span className="fw-bold">To</span>
                    <br />
                    <span className="fw-normal">{bcity}</span>
                  </div>
                </div>
              </div> */}
            </div>
            <br />

            <span
              style={{
                fontSize: "1.2rem",
                color: "#000",
                fontWeight: "normal",
              }}
            >
              <CiPlane style={{ color: "#000", fontSize: "1.7rem" }} />
              Departing flight
            </span>
            {/* <h6 className="mt-2 fw-bold fs-4">Mumbai, India to {bcity}</h6> */}
            <br />
            <br />

            {flights?.length > 0 &&
              flights.map((v, i) => {
                return v?.city === bcity ? (
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                    key={i}
                  >
                    <div
                      className="accordion-item"
                      style={{
                        boxShadow: "0 2px 8px 2px rgba(178, 178, 178, 0.406)",
                        marginBottom: "10px",
                      }}
                    >
                      <h2 className="accordion-header" id={"flush-heading" + i}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#flush-collapse" + i}
                          aria-expanded="false"
                          aria-controls={"flush-collapse" + i}
                        >
                          <div className="gap-5 d-flex fw-bold  w-100 overflow-auto">
                            <span className="me-2">
                              {v.time1}{" "}
                              <GoPrimitiveDot
                                style={{ marginRight: "-10px" }}
                              />
                              -------- {v.distance} --------
                              <CiPlane
                                style={{
                                  fontSize: "1.3rem",
                                  marginLeft: "-4px",
                                }}
                              />
                              {v.time2}
                            </span>
                            <span className="me-3">
                              <SlPlane /> {v.state}
                            </span>
                            <span className="me-4"> Non-stop </span>
                            <span>
                              <BiRupee />
                              {v.price}
                            </span>
                          </div>
                        </button>
                      </h2>
                      <div
                        id={"flush-collapse" + i}
                        className="accordion-collapse collapse"
                        aria-labelledby={"flush-heading" + i}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <span className="fw-normal fs-5">
                            Select a fare and continue to make this booking.
                          </span>
                          <br />

                          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                            <div className="col">
                              <div className="card h-100">
                                <div className="card-body">
                                  <h6 className="mb-4">{v.t1}</h6>
                                  <h6 className="mb-4">FLEXI</h6>
                                  <h5 className="card-title">
                                    <BiRupee />
                                    {v.p1}
                                  </h5>
                                  <p className="card-text">
                                    Hand baggage (7Kg) Check-In baggage (15KG)
                                  </p>
                                </div>
                                <div className="card-footer">
                                  <button
                                    onClick={toggle}
                                    className="btn btn-primary"
                                    style={{
                                      width: "194px",
                                      backgroundColor: "#16a085",
                                      border: "none",
                                    }}
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card h-100">
                                <div className="card-body">
                                  <h6 className="mb-4">{v.t2}</h6>
                                  <h6 className="mb-4">FLEXI PLUS</h6>
                                  <h5 className="card-title">
                                    <BiRupee />
                                    {v.p2}
                                  </h5>
                                  <p className="card-text">
                                    Hand baggage (7Kg) Check-In baggage (15KG)
                                    Free meal, Free seat and more...
                                  </p>
                                </div>
                                <div className="card-footer">
                                  <button
                                    onClick={toggle}
                                    className="btn btn-primary"
                                    style={{
                                      width: "194px",
                                      backgroundColor: "#16a085",
                                      border: "none",
                                    }}
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card h-100">
                                <div className="card-body">
                                  <h6 className="mb-4">{v.t3}</h6>
                                  <h6 className="mb-4">SUPER 6E</h6>
                                  <h5 className="card-title">
                                    <BiRupee />
                                    {v.p3}
                                  </h5>
                                  <p className="card-text">
                                    Hand baggage (7Kg) Check-In baggage (25KG)
                                    Free meal, Free seat, Fast forward, Airport
                                    services, Travel protection and more...
                                  </p>
                                </div>
                                <div className="card-footer">
                                  <button
                                    onClick={toggle}
                                    className="btn btn-primary"
                                    style={{
                                      width: "194px",
                                      backgroundColor: "#16a085",
                                      border: "none",
                                    }}
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Flight;
