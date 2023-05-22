import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

import { ErrorToast, SuccessToast } from "../../src/helper/Toast";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Register() {
  const [passwordType, setPasswordType] = useState("password");

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
  });

  // localStorage.setItem("userName", credentials.userName);
  // localStorage.setItem("phone", credentials.phone);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        ErrorToast(result.message);
      } else {
        dispatch({ type: "REGISTER_SUCCESS" });
        SuccessToast("Register Successfully!");

        navigate("/login");
      }
    } catch (err) {
      ErrorToast(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>

                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="userName"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      required
                      maxLength={10}
                      id="phone"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type={passwordType}
                      placeholder="password"
                      required
                      id="password"
                      value={credentials?.password}
                      onChange={handleChange}
                    />

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                        marginTop: -28,
                        marginRight: 10,
                      }}
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <AiFillEyeInvisible />
                      ) : (
                        <AiFillEye />
                      )}
                    </div>
                  </FormGroup>

                  <Button
                    className="btn secondary_btn auth_btn mt-2"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Register;
