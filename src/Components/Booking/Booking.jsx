import React, { useState, useContext, useEffect } from "react";
import "./Booking.css";
import { SuccessToast, ErrorToast } from "../../helper/Toast";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import Swal from "sweetalert2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    bookingId: Math.floor(Math.random() * 10000),
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    localStorage.setItem("guestSize", booking.guestSize);
  };

  const serviceFee = 830;
  const carandfood = 2490;
  const flightFee = 41500;
  const totalAmount =
    Number(price) * Number(booking.guestSize) +
    Number(carandfood) +
    Number(flightFee) * Number(booking.guestSize) +
    Number(serviceFee);

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [tourdata, setTourdata] = useState([]);
  const [paymentopen, setPaymentopen] = useState(false);

  const { id } = useParams();
  const tourData = async () => {
    let res = await fetch(`${BASE_URL}/tours/${id}`);
    res = await res.json();
    setData1(res?.data?.title);
    setTourdata(res?.data?.limit);
  };

  const size = localStorage.getItem("guestSize");

  let sum = 0;
  if (title === data1) {
    for (let i = 0; i <= data?.length; i++) {
      let total = data[i]?.tourName;
      let total1 = data[i]?.guestSize;
      if (total == title) {
        sum += total1;
      }
    }
  }

  const total5 = sum + parseInt(size);

  const handleClick = async (e) => {
    e.preventDefault();

    localStorage.setItem("fullname", booking.fullName);
    localStorage.setItem("phone", booking.phone);
    localStorage.setItem("bookAt", booking.bookAt);
    localStorage.setItem("guestSize", booking.guestSize);
    localStorage.setItem("price", price);
    localStorage.setItem("flightFee", flightFee);
    localStorage.setItem("carandfood", carandfood);
    localStorage.setItem("serviceFee", serviceFee);
    localStorage.setItem("totalAmount", totalAmount);

    let tourData = {
      ...booking,
      amount: totalAmount,
      // bookingId: data?.length + 1,
    };

    localStorage.setItem("bid", tourData.bookingId);
    if (title === data1 && total5 >= tourdata) {
      ErrorToast("Tour reach it's maximum limit!!");
    } else {
      try {
        if (!user || user === undefined || user === null) {
          navigate("/login");
        }

        const res = await fetch(`${BASE_URL}/booking`, {
          method: "post",
          headers: {
            authorization: localStorage.getItem("token"),
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(tourData),
        });

        const result = await res.json();

        if (!res.ok) {
          return ErrorToast(result?.message);
        }

        setPaymentopen(true);
        // navigate("/thank-you");
      } catch (err) {
        ErrorToast(err?.message);
      }
    }
  };

  const getPackageData = async () => {
    await axios
      .get("http://localhost:4000/bookings")
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getPackageData();
    tourData();
  }, []);

  return (
    <div className="booking">
      <div className="booking_top d-flex align-item-center justify-content-between">
        <h3>
          ₹{price}
          <span> /per person</span>
        </h3>

        <span className="tour_rating d-flex align-item-center">
          <i className="ri-star-s-fill text-warning"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ============ booking form ============ */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              maxLength={10}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="d-flex align-item-center gap-3">
            <input
              type="date"
              placeholder=""
              min={new Date().toISOString().split("T")[0]}
              id="bookAt"
              required
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Guest"
              min="1"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* ============ booking bottom ============ */}
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-item-center gap-1">
              ₹{price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span> ₹{price}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-item-center gap-1">
              ₹{flightFee} <i className="ri-close-line"></i> 1 person
            </h5>
            <span> ₹{flightFee}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0">
            <h5>Car & Food</h5>
            <span> ₹{carandfood}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0">
            <h5>Service charge </h5>
            <span> ₹{serviceFee}</span>
          </ListGroupItem>

          <hr style={{ margin: 0 }} />
          <ListGroupItem className="border-0 px-0 total mb-4">
            <h5>Total </h5>
            <span> ₹{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        {paymentopen ? (
          <div className="payment">
            <PayPalScriptProvider
              options={{
                "client-id": "test",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalAmount,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(function (details) {
                    Swal.fire(
                      "Congratulations",
                      "Transaction completed by " +
                        details.payer.name.given_name,
                      "success"
                    ).then((result) => {
                      window.location.href = "/thank-you";
                    });
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        ) : (
          <Button className="btn1 primary_btn w-100" onClick={handleClick}>
            Book Now
          </Button>
        )}

        <ToastContainer style={{ marginTop: 70 }} />
      </div>
    </div>
  );
};
export default Booking;
