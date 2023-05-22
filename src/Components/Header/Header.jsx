import React, { useRef, useEffect, useContext } from "react";
import "./Header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/tripzen.png";
import { AuthContext } from "./../../context/AuthContext";

import { FaUserCircle } from "react-icons/fa";

import Dropdown from "react-bootstrap/Dropdown";
import Logout1 from "../../Pages/Logout1";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contactus",
    display: "Contact Us",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  // const [data, setData] = useState([]);
  // const ad_id = localStorage.getItem("login_id");
  // const uid = ad_id.split('"');
  // const user_id = uid[1];

  // const getPackageData = async () => {
  //   await axios
  //     .get(`http://localhost:4000/api/v1/users/${user_id}`, {
  //       headers: {
  //         authorization: localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       setData(res?.data?.data);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  // useEffect(() => {
  //   getPackageData();
  // }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
  const profile = localStorage.getItem("userimage");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* ============ logo ============ */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {/* ============ logo end ============ */}

            {/* ============ menu start ============ */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ============ menu end ============ */}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <div className="d-flex">
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{
                            backgroundColor: "#16a08408",
                            border: "none",
                            color: "#000",
                          }}
                          className="usertoggle"
                          variant="success"
                          id="dropdown-basic"
                        >
                          <div className="d">
                            <img
                              style={{
                                width: 35,
                                borderRadius: 50,
                                marginTop: -17,
                              }}
                              src={profile ? profile : user.photo}
                              alt=""
                            />
                            <h5
                              style={{
                                fontSize: 17,
                                marginTop: -29,
                                marginInline: 40,
                              }}
                              className="mb-0"
                            >
                              {user.userName}
                            </h5>
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          style={{
                            lineHeight: 2,
                            position: "absolute",
                            top: 0,
                            marginTop: 10,
                          }}
                        >
                          <Dropdown.Item className="mt-0" href="/profile">
                            My Profile
                          </Dropdown.Item>
                          <Dropdown.Item href="/profilebooking">
                            My Booking
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" onClick={logout}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </>
                ) : UserInfo ? (
                  <>
                    <div className="d-flex">
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{
                            backgroundColor: "#16a08408",
                            border: "none",
                            color: "#000",
                          }}
                          className="usertoggle"
                          variant="success"
                          id="dropdown-basic"
                        >
                          <FaUserCircle style={{ fontSize: 30 }} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{
                            lineHeight: 2,
                            position: "absolute",
                            top: 0,
                          }}
                        >
                          <Dropdown.Item className="mt-0" href="/profile">
                            My Profile
                          </Dropdown.Item>
                          <Dropdown.Item href="/profilebooking">
                            My Booking
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" onClick={logout}>
                            <Logout1 />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <h5
                        style={{
                          fontSize: 17,
                          marginTop: 9,
                          marginInline: 18,
                        }}
                        className="mb-0"
                      >
                        {UserInfo.givenName}
                      </h5>
                    </div>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile_menu" onClick={toggleMenu}>
                <i style={{ cursor: "pointer" }} className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
