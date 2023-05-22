import React, { useContext, useEffect, useState } from "react";
import "../Styles/Profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import { SuccessToast } from "../helper/Toast";
import { MdModeEdit } from "react-icons/md";

const Profile = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  let [photo, setPhoto] = useState();

  const getImage = (e) => {
    setPhoto("/tour-images/" + e.target.files[0].name);
  };

  const ad_id = localStorage.getItem("login_id");
  const uid = ad_id.split('"');
  const user_id = uid[1];

  const updateProfile = () => {
    fetch(`http://localhost:4000/api/v1/users/${user_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ photo }),
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        localStorage.setItem("userimage", res?.data?.photo);
      });
    });
    SuccessToast("Updated Profile Successfully!!");
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

            <div className="col-md-9">
              <div className="bg-white rounded-3 p-4 position-relative">
                <Row>
                  <h3 className="ps-4 text-center mb-4">My Profile</h3>
                  <hr />
                  <Col className="pcol" md={6}>
                    <div className="container d-flex justify-content-center align-items-center">
                      <div className="pcard mt-5">
                        {data?.map((val, i) => {
                          return user.email === val?.email ? (
                            <div key={i}>
                              <div className="upper">
                                <img
                                  src="https://i.imgur.com/Qtrsrk5.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="user text-center">
                                <div className="profile">
                                  <img
                                    src={photo ? photo : val?.photo}
                                    className="rounded-circle"
                                    width="80"
                                    alt=""
                                  />
                                  <label
                                    htmlFor="fileUpload1"
                                    style={{
                                      position: "absolute",
                                      top: 55,
                                      left: 60,
                                    }}
                                  >
                                    {isEdit ? (
                                      <div>
                                        <MdModeEdit
                                          style={{
                                            fontSize: "30px",
                                            color: "#16a085",
                                            backgroundColor: "#fff",
                                            border: "3px solid #16a085",
                                            borderRadius: 50,
                                            padding: 5,
                                          }}
                                        />
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </label>
                                  <input
                                    hidden
                                    id="fileUpload1"
                                    type="file"
                                    onChange={getImage}
                                    disabled={!isEdit}
                                  />
                                </div>
                              </div>
                              <div className="mt-5 text-center">
                                <h4 className="mb-0">{val?.userName}</h4>
                                <div className="mt-5 px-4 text-center">
                                  <div className="stats mb-3 d-flex">
                                    <p className="mb-0">Name : </p>
                                    <p className="detail fw-bold ms-2">
                                      {val?.userName}
                                    </p>
                                  </div>
                                  <div className="stats mb-3 d-flex">
                                    <p className="mb-0">Email : </p>
                                    <p className="detail fw-bold ms-2">
                                      {val?.email}
                                    </p>
                                  </div>
                                  <div className="stats mb-3 d-flex">
                                    <p className="mb-0">Phone Number : </p>
                                    <p className="detail fw-bold ms-2">
                                      {val?.phone}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          );
                        })}
                      </div>
                    </div>
                  </Col>

                  {!isEdit ? (
                    <div
                      style={{ width: "11.5%" }}
                      className="p_editbtn px-3 py-2 btn_1 gradient pulse_bt mt-2"
                      onClick={() => {
                        setIsEdit(true);
                      }}
                    >
                      Edit Profile
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{
                          width: "10",
                          backgroundColor: "grey",
                          top: "90%",
                          right: "15.5%",
                        }}
                        className="p_editbtn cancelBtn px-3 py-2 btn_1 gradient pulse_bt mt-2"
                        onClick={() => {
                          setIsEdit(false);
                        }}
                      >
                        Cancel
                      </div>
                      <div
                        style={{ width: "12.5%" }}
                        className="p_editbtn saveBtn px-3 py-2 btn_1 gradient pulse_bt mt-2"
                        onClick={() => {
                          updateProfile();
                          setIsEdit(false);
                        }}
                      >
                        Save Profile
                      </div>
                    </div>
                  )}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
