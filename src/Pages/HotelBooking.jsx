import React from "react";
import "../Styles/Hotel.css";

import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const HotelBooking = () => {
  const { id } = useParams();

  const {
    data: hotels,
    loading,
    error,
  } = useFetch(`http://localhost:4000/hotels/gethotelbyid`);

  return (
    <>
      {!loading && !error && (
        <div className="m-5">
          {hotels?.map((hotel) => {
            return (
              <div className="row justify-content-center mt-5 bs">
                <div className="col-md-6">
                  <h1>{hotel.name}</h1>
                  <img src={hotel.imageurls[0]} className="bigimg" />
                </div>

                <div className="col-md-6">
                  <div style={{ textAlign: "right" }}>
                    <h1>Booking Details</h1>
                    <hr />

                    <b>
                      <p>Name : </p>
                      <p>From Date : </p>
                      <p>To Date : </p>
                      <p>Max Count : {hotel.maxcount}</p>
                    </b>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <b>
                      <h1>Amount</h1>
                      <hr />

                      <p>Total days : </p>
                      <p>Rent per day : {hotel.rentperday}</p>
                      <p>Total Amount</p>
                    </b>
                  </div>

                  <div style={{ float: "right" }}>
                    <button className="hbtn btn-primary">Pay Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HotelBooking;
