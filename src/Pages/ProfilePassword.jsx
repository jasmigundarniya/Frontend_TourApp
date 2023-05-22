import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ErrorToast, SuccessToast } from "../helper/Toast";

const ProfilePassword = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [pass, setPass] = useState();
  const [currPass, setCurrPass] = useState();
  const [newPass, setNewPass] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const id = localStorage.getItem("login_id");
  const uid = id.split('"');
  const user_id = uid[1];

  const getData = async () => {
    let result = await fetch(`http://localhost:4000/api/v1/users/${user_id}`);
    result = await result.json();
    setPass(result.password);
  };
  useEffect(() => {
    getData();
  });

  const updatePassword = async () => {
    if (pass === currPass) {
      let result = await fetch(
        `http://localhost:4000/api/v1/users/${user_id}`,
        {
          method: "put",
          body: JSON.stringify({ password: newPass }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      if (result) {
        if (newPass === confirmPass) {
          SuccessToast("Updated Successfully!!");
          navigate("/dashboard");
        } else {
          ErrorToast("Confirm Password not matched with New Password!!!");
        }
      } else {
        ErrorToast("Something went wrong!!");
      }
    } else {
      ErrorToast("Invalid Current Password");
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
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

                  <li className="nav-item pt-3">
                    <NavLink
                      activeClassName="active"
                      to="/profilepassword"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Change Password
                    </NavLink>
                  </li>

                  <li className="nav-item pt-3" onClick={logout}>
                    Log Out
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-9">
              <div className="bg-white p-4">
                <Row>
                  <h3 className="ps-4">Change Password</h3>
                  <hr />
                  <Col className="pcol" md={6}>
                    <div className="p_detailContainer ms-3 mt-5">
                      <div className="p_detail mb-4 text-capitalize">
                        Current Password
                        <input
                          type="password"
                          className="form-control mt-2"
                          id="inputEmail4"
                          value={currPass}
                          name="currPass"
                          onChange={(e) => {
                            setCurrPass(e.target.value);
                          }}
                          placeholder="Current Password"
                        />
                      </div>

                      <div className="p_detail mb-4">
                        New Password
                        <input
                          type="password"
                          className="form-control mt-2"
                          id="inputPassword4"
                          name="newPass"
                          value={newPass}
                          onChange={(e) => {
                            setNewPass(e.target.value);
                          }}
                          placeholder="New Password"
                        />
                      </div>

                      <div className="p_detail mb-4">
                        Confirm Password
                        <input
                          type="password"
                          className="form-control mt-2"
                          id="inputPassword4"
                          name="confirmPass"
                          value={confirmPass}
                          onChange={(e) => {
                            setConfirmPass(e.target.value);
                          }}
                          placeholder="Confirm Password"
                        />
                      </div>

                      <div className="d-flex justify-content-center align-items-center mb-5">
                        <button
                          className="pbtn px-3 py-2 btn_1 gradient pulse_bt"
                          type="button"
                          style={{
                            backgroundColor: "#16a085",
                            border: "none",
                            color: "#ffffff",
                            borderRadius: 5,
                          }}
                          onClick={updatePassword}
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePassword;
