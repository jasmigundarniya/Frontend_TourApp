import React, { useContext, useEffect, useState } from "react";
import "../Styles/Profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import moment from "moment";

import image from "../assets/images/nofound.gif";

import { AuthContext } from "../context/AuthContext";
import { MdSearch } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/Toast";
import Swal from "sweetalert2";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const ProfileBooking = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  const [modal, setModal] = useState(false);

  const getPackageData = async () => {
    let array = [];
    await axios
      .get("http://localhost:4000/bookings")
      .then((res) => {
        res?.data?.data?.filter((val) => {
          if (user.email === val?.userEmail) {
            array.push(val);
          }
        });
        setData(array);
        setSearchData(res?.data?.data);
        setProduct(res?.data?.data);
        SetFilter("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getPackageData();
  }, []);

  const [filter, SetFilter] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchData);
    } else {
      const filterres = searchData.filter(
        (val) => val.bookAt.toLowerCase().includes(e.target.value.toLowerCase())
        // val.bookingId.toLowerCase().includes(e.target.value.toLowerCase())
      );

      if (filterres.length < 0) {
        setData([{ bookAt: "no data" }]);
      } else {
        setData(filterres);
      }
    }
    SetFilter(e.target.value);
  };

  const filterByStatus = (status) => {
    if (status === "upcoming") {
      const filteredData = searchData.filter(
        (data) => new Date(data.bookAt).getTime() >= new Date().getTime()
      );
      setData(filteredData);
    } else if (status === "completed") {
      const filteredData = searchData.filter(
        (data) => new Date(data.bookAt).getTime() < new Date().getTime()
      );
      setData(filteredData);
    }
  };

  // const totalAmount = localStorage.getItem("totalAmount");

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [groupSize, setGroupSize] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();

  function updateUser() {
    let item = {
      fullName: name,
      tourName: title,
      guestSize: groupSize,
      phone: phone,
      userEmail: email,
      bookAt: date,
    };
    console.warn("item", item);

    fetch(`http://localhost:4000/bookings/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        getPackageData();
      });
    });
    SuccessToast("Updated Successfully!!");
  }

  function deleteTour(id) {
    fetch(`http://localhost:4000/bookings/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        // console.warn(res);
        SuccessToast("Cancelled Successfully!!");
        getPackageData();
      });
    });
  }

  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (date) => {
    let datefilter = product.filter((product) => {
      let productDate = new Date(product["bookAt"]);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setData(datefilter);
    setIsOpen(false);
  };
  const selectionRange = {
    startDate: startDate,
    startDate: endDate,
    key: "selection",
  };

  return (
    <>
      <div className="profile_screen pt-3 pb-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 bg-white rounded-3 p-5">
              <div className="profile-sidebar-main">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      to="/profile"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      My Account
                    </NavLink>
                  </li>

                  <li className="nav-item pt-3">
                    <NavLink
                      activeClassName="active"
                      to="/profilebooking"
                      style={{ textDecoration: "none", color: "#000" }}
                      // onClick={getPackageData}
                      onClick="/profilebooking"
                    >
                      My Booking
                    </NavLink>
                  </li>

                  {/* <li className="nav-item pt-3">
                    <NavLink
                      activeClassName="active"
                      to="/profilepassword"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Change Password
                    </NavLink>
                  </li> */}

                  <li className="nav-item pt-3" onClick={logout}>
                    Log Out
                  </li>
                </ul>
              </div>
            </div>

            <Modal
              size="lg"
              isOpen={modal}
              toggle={() => setModal(!modal)}
              style={{ marginTop: 60 }}
            >
              <ModalHeader
                toggle={() => setModal(false)}
                className="mt-1 d-flex justify-content-center updatemodalfooter"
              >
                <h3>Edit Details</h3>
              </ModalHeader>

              <ModalBody>
                <Form>
                  <Row className="d-flex justify-content-center p-3">
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <Input
                          type="text"
                          placeholder="TourName"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <Input
                          type="number"
                          placeholder="GroupSize"
                          name="groupsize"
                          value={groupSize}
                          onChange={(e) => setGroupSize(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <Input
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => setName(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <Input
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <Input
                          type="date"
                          placeholder="BookDate"
                          name="date"
                          value={moment(date).format("YYYY-MM-DD")}
                          onChange={(e) => setDate(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>

              <div className="d-flex justify-content-center updatemodalfooter">
                <div className="text-center">
                  <Button
                    style={{
                      backgroundColor: "#16a085",
                      border: "none",
                      fontSize: "20px",
                    }}
                    onClick={() => {
                      {
                        updateUser();
                      }
                      setModal(false);
                    }}
                    className="addtour mb-5"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Modal>

            <div className="col-md-9">
              <div className="bg-white rounded-3 p-4 position-relative">
                <Row>
                  <h3 className="ps-4">My Booking</h3>

                  <div className="filtersearch d-flex mt-3">
                    <MdSearch
                      style={{
                        width: "1.5rem",
                        height: "3vh",
                        marginTop: "5px",
                      }}
                    />

                    {/* <input
                    type="text"
                    value={filter}
                    placeholder="Search by id"
                    onInput={(e) => handleFilter(e)}
                    style={{
                      border: "none",
                      height: "2rem",
                      width: "10%",
                      background: "#f8f9fa",
                      borderRadius: "5px",
                      paddingLeft: "7px",
                      outline: "none",
                      marginBottom: "10px",
                    }}
                  /> */}

                    <div className="d-flex flex-column">
                      <div className="m-2 mt-0 mb-2">
                        <input
                          style={{
                            width: "105%",
                            border: "1px solid #ccc",
                            height: "2rem",
                            background: "rgb(248, 249, 250)",
                            borderRadius: "5px",
                            paddingLeft: "7px",
                            outline: "none",
                          }}
                          value={`${moment(startDate).format(
                            "DD-MM-YYYY"
                          )} ~ ${moment(endDate).format("DD-MM-YYYY")}`}
                          onClick={() => setIsOpen(true)}
                        />
                      </div>
                      <div
                        style={{
                          boxShadow: "0 2px 8px 2px rgba(178, 178, 178, 0.406)",
                        }}
                        className="position-absolute mt-5 ms-1"
                      >
                        {isOpen && (
                          <DateRange
                            editableDateInputs={false}
                            onChange={handleSelect}
                            moveRangeOnFirstSelection={false}
                            ranges={[selectionRange]}
                          />
                        )}
                      </div>
                    </div>
                    <span
                      className="ms-3 mb-2 mt-1"
                      onChange={(e) => filterByStatus(e.target.value)}
                    >
                      <input type="radio" value="upcoming" name="status" />{" "}
                      Upcoming
                      <span style={{ marginInline: 10 }}>
                        <input type="radio" value="completed" name="status" />{" "}
                        Completed{" "}
                      </span>
                    </span>
                  </div>
                  <hr />

                  <div className="w-100 overflow-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: "12%" }} scope="col">
                            Booking Id
                          </th>
                          <th scope="col">Name</th>
                          <th scope="col">TourName</th>
                          <th scope="col">GroupSize</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Email</th>
                          <th scope="col">BookDate</th>
                          <th style={{ width: "15%" }} scope="col">
                            Price
                          </th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {data?.length !== 0 ? (
                          data?.map((val, i) => {
                            return user.email === val?.userEmail ? (
                              <>
                                <tr key={i}>
                                  <td scope="row">{val?.bookingId}</td>
                                  <td>{val?.fullName}</td>
                                  <td>{val?.tourName}</td>
                                  <td>
                                    <div style={{ marginLeft: 28 }}>
                                      {val?.guestSize}
                                    </div>
                                  </td>
                                  <td>{val?.phone}</td>
                                  <td>{val?.userEmail}</td>
                                  <td>
                                    {moment(val?.bookAt).format("DD-MM-YYYY")}
                                  </td>
                                  <td>
                                    <span>₹ {val?.amount}</span>
                                  </td>
                                  <td>
                                    {new Date(val?.bookAt).getTime() >=
                                    new Date().getTime() ? (
                                      <div
                                        style={{
                                          backgroundColor: "#ffe6e6",
                                          color: "red",
                                          borderRadius: 5,
                                        }}
                                        className="text-center"
                                      >
                                        Upcoming
                                      </div>
                                    ) : (
                                      <div
                                        style={{
                                          backgroundColor: "#cdffcd",
                                          color: "green",
                                          borderRadius: 5,
                                        }}
                                        className="text-center"
                                      >
                                        Completed
                                      </div>
                                    )}
                                  </td>

                                  <td className="text-center">
                                    {/* <FaEdit
                                    onClick={() => {
                                      setModal(true);
                                      edit(val);
                                    }}
                                    role="button"
                                    style={{
                                      marginInline: 5,
                                      fontSize: "1.3rem",
                                      color: "green",
                                    }}
                                  /> */}

                                    {new Date(val?.bookAt).getTime() >=
                                    new Date().getTime() ? (
                                      <ImCancelCircle
                                        onClick={() => {
                                          Swal.fire({
                                            title:
                                              "Are you sure you want to cancel this tour?",
                                            html: `Total Amount : ₹ ${
                                              val?.amount
                                            } <br>
                                                   Cancellation Charge : 15% <br>
                                                   Refundable Amount : ₹ ${Math.floor(
                                                     val?.amount -
                                                       (val?.amount * 15) / 100
                                                   )}`,
                                            showConfirmButton: true,
                                            showCancelButton: true,
                                            confirmButtonText: "OK",
                                            cancelButtonText: "Cancel",
                                            icon: "warning",
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                              deleteTour(val?._id);
                                            } else
                                              ErrorToast(
                                                "Something went wrong!!"
                                              );
                                          });
                                        }}
                                        role="button"
                                        style={{
                                          fontSize: "1.3rem",
                                          color: "#EB455F",
                                        }}
                                      />
                                    ) : (
                                      <FaRegCheckCircle
                                        style={{
                                          fontSize: "1.3rem",
                                          color: "green",
                                        }}
                                      />
                                    )}
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ""
                            );
                          })
                        ) : (
                          <tr className="d-flex flex-column">
                            <img
                              style={{ width: "190%", marginLeft: "325%" }}
                              src={image}
                            />
                            <h5
                              style={{
                                marginLeft: "340%",
                                width: "200%",
                                marginTop: -30,
                              }}
                            >
                              No booking found
                            </h5>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBooking;
