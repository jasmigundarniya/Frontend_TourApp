import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ErrorToast, SuccessToast } from "../../src/helper/Toast";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Login1 from "./Login1";
// import video from "../assets/images/forgot.mp4";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  // const [model, setModel] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  localStorage.setItem("email", credentials.email);

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

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },

        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        ErrorToast(result.message);
      } else {
        console.log("loginData", result.data);
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("login_id", JSON.stringify(result.data._id));
        localStorage.setItem("token", result.data?.token);

        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });

        SuccessToast("Logged in Successfully!!");

        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login_container d-flex justify-content-between">
                <div className="login_img">
                  <img src={loginImg} alt="" />
                </div>

                <div className="login_form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>

                  <h2>Login</h2>
                  <Form onSubmit={handleClick}>
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
                      Login
                    </Button>
                  </Form>

                  {/* <p
                    onClick={() => setModel(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot password?
                  </p> */}

                  <p style={{ marginTop: 25 }}>
                    Don't have an account?
                    <Link to="/register">Create an account</Link>
                  </p>

                  <div className="text-center">
                    <Login1 />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Modal
        className="login-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        show={model}
        onHide={() => {
          setModel(false);
        }}
      >
        <Modal.Header
          className="ms-auto p-2 me-3"
          style={{ borderRadius: "0px", border: "none" }}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div className="container login p-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 loginform">
                <h2>Forgot password?</h2>
                <p>Enter your email address to retrieve your password</p>
                <Form>
                  <Form.Group>
                    <Form.Label className="mt-2">Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Form.Group>
                  <Button
                    className="mt-4 mb-4"
                    style={{ backgroundColor: "#16a085" }}
                    type="submit"
                  >
                    Reset Password
                  </Button>
                </Form>
              </div>

              <div className="col-lg-6">
                <video style={{ width: "120%" }} muted autoPlay loop>
                  <source src={video} />
                </video>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}
export default Login;
