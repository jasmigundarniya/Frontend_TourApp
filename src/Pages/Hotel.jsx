import React, { useEffect, useState } from "react";
import "../Styles/Hotel.css";
import axios from "axios";
import HotelRoom from "./HotelRoom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Hotel = () => {
  const [hotel, setHotel] = useState([]);

  const {
    data: hotels,
    loading,
    error,
  } = useFetch("http://localhost:4000/hotels");

  const getHotelData = async () => {
    await axios
      .get("http://localhost:4000/hotels")
      .then((res) => {
        setHotel(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getHotelData();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function toggle() {
    Swal.fire("Congratulations", "Your Hotel Booked Successfully!", "success");
  }

  const scity = localStorage.getItem("value");
  const bcity = localStorage.getItem("city");

  return (
    <>
      <div className="hotel_info">
        <div className="container hc">
          <div className="row justify-content-center mt-5">
            {!loading && !error && (
              <>
                {hotels?.map((hotel, i) => {
                  return hotel.city === bcity ? (
                    <div className="col-md-9 mb-4" key={i}>
                      <HotelRoom hotel={hotel} />
                    </div>
                  ) : (
                    ""
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
