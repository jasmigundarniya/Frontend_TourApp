import "../Styles/Hotel.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HotelRoom = ({ hotel }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function toggle() {
    Swal.fire("Congratulations", "Your Hotel Booked Successfully!", "success");
  }

  return (
    <>
      <div className="row bs">
        <div className="col-md-4">
          <img
            src={hotel.imageurls[0]}
            className="smallimg image-fluid"
            alt=""
          />
        </div>

        <div className="hcol col-md-8 text-left">
          <p style={{ color: "#16a085" }} className="mb-1 fs-4 fw-bold">
            {hotel.name}
          </p>

          <b>
            Phone Number : <span>{hotel.phonenumber}</span>
            <br />
            Rent per day : <span>{hotel.rentperday}</span>
            <br />
            Max People : <span>{hotel.maxcount}</span>
          </b>
          <br />

          <b style={{ color: "grey" }} className="fs-6 fw-normal">
            Breakfast included, Wi-Fi
            <br />
            You can cancel later, so lock in this great price today.
          </b>

          <br />
          <br />

          <div style={{ float: "right", marginTop: -15 }}>
            <Link>
              <button
                onClick={toggle}
                style={{ marginInline: 10 }}
                className="hbtn"
              >
                Book Now
              </button>
            </Link>

            <button onClick={handleShow} className="hbtn btn-primary">
              View Details
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{hotel.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {hotel.imageurls.map((url, i) => {
              return (
                <Carousel.Item key={i}>
                  <img className="d-block w-100 bigimg" src={url} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{hotel.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#000" }}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HotelRoom;
