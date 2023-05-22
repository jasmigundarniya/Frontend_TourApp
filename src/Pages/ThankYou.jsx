import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/ThankYou.css";
import Newsletter from "../Shared/Newsletter";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";
import { SuccessToast } from "../helper/Toast";
import axios from "axios";

const ThankYou = () => {
  const navigate = useNavigate();

  const fullName = localStorage.getItem("fullname");
  const phone = localStorage.getItem("phone");
  const bookAt = localStorage.getItem("bookAt");
  const guestSize = localStorage.getItem("guestSize");
  const price = localStorage.getItem("price");
  const flightFee = localStorage.getItem("flightFee");
  const carandfood = localStorage.getItem("carandfood");
  const service = localStorage.getItem("serviceFee");
  const totalAmount = localStorage.getItem("totalAmount");

  const photo = localStorage.getItem("photo");
  const title = localStorage.getItem("title");
  const city = localStorage.getItem("city");
  const bid = localStorage.getItem("bid");
  const userId = bid;

  // const [openModal, setOpenModal] = useState(false);
  // const [modal, setModal] = useState(false);

  // function toggle() {
  //   Swal.fire(
  //     "Congratulations",
  //     "Your Tour Booked Successfully!",
  //     "success"
  //   ).then((result) => {
  //     window.location.href = "/";
  //   });
  // }

  const [data, setData] = useState([]);
  const id = data;
  console.log("id :>> ", id);

  const getPackageData = async () => {
    await axios
      .get(`http://localhost:4000/bookings/${id}`)
      .then((res) => {
        // setData(res?.data?.data);
        if (userId === bid) {
          for (let i = 0; i < res?.data?.data?.length; i++) {
            setData(res?.data?.data[i]?._id);
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  function deleteTour(id) {
    fetch(`http://localhost:4000/bookings/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        // console.warn(res);
        SuccessToast("Cancelled Successfully!!");
        getPackageData();
        navigate("/tours");
      });
    });
  }

  useEffect(() => {
    getPackageData();
  }, []);

  const email1 = localStorage.getItem("email");
  const [detail, setDetail] = useState({
    fullName1: fullName,
    phone1: phone,
    bookAt1: bookAt,
    guestSize1: guestSize,
    price1: price,
    flightFee1: flightFee,
    carandfood1: carandfood,
    service1: service,
    totalAmount1: totalAmount,
    title1: title,
    city1: city,
    bid1: bid,
    photo1: photo,
  });
  const {
    fullName1,
    phone1,
    bookAt1,
    guestSize1,
    price1,
    flightFee1,
    carandfood1,
    service1,
    totalAmount1,
    title1,
    city1,
    bid1,
    photo1,
  } = detail;

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(email1);
  console.log(detail);
  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fullName1,
        phone1,
        bookAt1,
        guestSize1,
        price1,
        flightFee1,
        carandfood1,
        service1,
        totalAmount1,
        title1,
        city1,
        bid1,
        photo1,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      setShow(true);
      setEmail(email);
      console.log("Email sent");
      SuccessToast("Your Email Send Succesfully!!");
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm="12" className="mainform">
              <h1 className="fs-3 text-left ms-1 texttitle">Booking details</h1>
              <hr />

              <div className="d-flex pt-3 pb-4">
                <img
                  src={photo}
                  alt=""
                  className="ms-1"
                  style={{ width: "30%", borderRadius: 10 }}
                />
                <div style={{ marginLeft: 20 }}>
                  <h5 style={{ marginBottom: 0 }}>{title}</h5>

                  <span className="ctextc" style={{ fontSize: 12 }}>
                    <i
                      className="ri-map-pin-2-line"
                      style={{ marginRight: 4 }}
                    ></i>
                    {city}
                  </span>

                  <span className="cdetails">
                    <div className="cgap1 d-flex">
                      <HiUsers className="cicons1" />
                      <div style={{ marginTop: "-1px" }}>{guestSize}</div>
                    </div>

                    <RxDotFilled style={{ marginTop: 5 }} />

                    <div className="cgap2 d-flex mt-1">
                      <FaCalendarAlt className="cicons2" />
                      <div style={{ marginTop: "-3px" }}>{bookAt}</div>
                    </div>
                  </span>
                </div>
              </div>

              <table class="table table-borderless">
                <tbody>
                  {/* <tr>
                    <td className="f1" scope="row">
                      Booked for
                    </td>
                    <td style={{ marginRight: 5 }} className="f3">
                      Phone
                    </td>
                  </tr>

                  <tr>
                    <td className="f2" scope="row">
                      <span
                        style={{
                          backgroundColor: "#16a08412",
                          padding: "8px",
                          borderRadius: 10,
                        }}
                      >
                        {fullName}
                      </span>
                    </td>
                    <td className="f4">
                      <span
                        style={{
                          backgroundColor: "#16a08412",
                          padding: "8px",
                          borderRadius: 10,
                        }}
                      >
                        {phone}
                      </span>
                    </td>
                  </tr> */}

                  <div>
                    <Row>
                      <Col className="b" xs="4">
                        <div>Booking Id</div>
                        <div>Booked for</div>
                        <div>Phone</div>
                        <div>Email</div>
                      </Col>

                      <Col className="b" xs="1">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </Col>

                      <Col className="a" xs="6">
                        <div>{bid}</div>
                        <div>{fullName}</div>
                        <div>{phone}</div>
                        <div>{email1}</div>
                      </Col>
                    </Row>
                  </div>

                  <hr className="line" />

                  <tr>
                    <td className="formtitle">
                      Package Price
                    </td>
                    <td className="formdata">₹{price}</td>
                  </tr>

                  <tr>
                    <td className="formtitle">
                      Flight Fee
                    </td>
                    <td className="formdata">₹{flightFee}</td>
                  </tr>

                  <tr>
                    <td className="formtitle">
                      Car And Food
                    </td>
                    <td className="formdata">₹{carandfood}</td>
                  </tr>

                  <tr>
                    <td className="formtitle">
                      Service
                    </td>
                    <td className="formdata">₹{service}</td>
                  </tr>

                  <hr className="line" />

                  <tr>
                    <td className="formtitle fw-bold">
                      Total Amount
                    </td>
                    <td style={{ color: "#000" }} className="formdata fw-bold">
                      ₹{totalAmount}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* <Modal
                className="modalcontainer"
                style={{ marginTop: "10%", width: "31%" }}
                size="lg"
                isOpen={modal}
                toggle={() => setModal(!modal)}
              >
                <ModalHeader
                  style={{ borderBottom: "white" }}
                  toggle={() => setModal(false)}
                ></ModalHeader>

                <ModalBody className="modalbody">
                  <div className="modalicon">
                    <span>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                  </div>

                  <div className="title">
                    <h1
                      style={{
                        fontSize: "3.6rem",
                        fontFamily: " var(--subtitle-font-name)",
                      }}
                      className="mb-3 fw-semibold d-flex justify-content-center align-items-center"
                    >
                      Thank You
                    </h1>
                    <h3 className="mb-4  d-flex justify-content-center align-items-center">
                      Your Tour is Booked.
                    </h3>
                  </div>

                  <div className="footer">
                    <button>
                      <Link className="textl" to="/home">
                        ok
                      </Link>
                    </button>
                  </div>
                </ModalBody>
              </Modal> */}
            </Col>

            <div className="btns text-center">
              <Button
                onClick={() => {
                  deleteTour(id);
                }}
                className="btn primary_btn w-25 mb-2"
              >
                {/* <Link className="textl" to="/tours"> */}
                Cancel
                {/* </Link> */}
              </Button>

              <Button
                // onClick={toggle}
                onClick={sendEmail}
                className="btn primary_btn w-25 mb-2"
              >
                <Link className="textl" to="/">
                  Confirm
                </Link>
              </Button>
            </div>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};
export default ThankYou;
