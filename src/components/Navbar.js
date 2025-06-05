import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "./Navbar.css";
import Mainlogo from "../assets/Mainlogo.png";
import india from "../assets/india.jpg";
import us from "../assets/us.jpg";

export default function CustomNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="py-3 shadow-sm custom-navbar"
        style={{ backgroundColor: "rgba(31, 41, 55, 1)" }}
      >
        <Container fluid className="d-flex flex-column ">

        <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>    

    <div class=" w-100" >
          {/* First Row */}
          <Row className="w-100 mb-5 align-items-center ">
            <Col md={4}>
            <a class="navbar-brand brand" href="#">
        <img src={Mainlogo} alt="Logo" className="Mainlogo" />
        </a>
            </Col>
            <Col>
            <div class="collapse navbar-collapse" id="navbarNav" >
            <Col md={5}>
              <div className="navSearch-box d-flex align-items-center">
                <input
                  type="text"
                  placeholder="Search by OEM code"
                  className="navSearch"
                />
                <i className="bi bi-search navSearch-button text-white"></i>
              </div>
            </Col>
            <Col
              md={5}
              className="d-flex justify-content-end align-items-center"
            >
              {/* ✅ CHANGED: Removed nested Cols, use divs instead */}
              <div className="d-flex align-items-center me-3 ">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "28px" }}
                >
                  local_mall
                </span>
                <p className="cart-box mb-0 ms-2">Cart</p>
              </div>

              <div className="d-flex align-items-center me-3">
                <i
                  className="bi bi-heart text-white"
                  style={{ fontSize: "24px" }}
                ></i>
                <p className="heart-box mb-0 ms-2">Wishlist</p>
              </div>

              <div className="d-flex align-items-center">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px", color: "white" }}
                >
                  account_circle
                </span>
                <p className="login-box mb-0 ms-2">Login</p>
              </div>
            </Col>
            </div>
            </Col>
          </Row>
          </div>

          <div class="collapse navbar-collapse w-100" id="navbarNav">

          {/* Second Row */}
          <Row className="w-100 align-items-center">
            {" "}
            {/* ✅ CHANGED: Second row vertical after first */}
            <Col md={4}>
              <div className="contact">Whatsapp: wa.me/48453094174</div>
            </Col>
            <Col md={4} className="d-flex justify-content-center gap-4">
              <Nav.Link className="home">Home</Nav.Link>
              <Nav.Link className="aboutus">About Us</Nav.Link>
              <Nav.Link className="shop">Shop</Nav.Link>
              <Nav.Link className="contactus">Contacts</Nav.Link>
            </Col>
            <Col md={3} className="d-flex justify-content-end">
              <div className="dropdown language">
                <button
                  className="btn btn-secondary dropdown-toggle main-dropdown"
                  style={{ backgroundColor: "rgba(31, 41, 55, 1)" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <img src={us} alt="US Flag" className="flag-image me-2" />
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <img
                        src={india}
                        alt="India Flag"
                        className="flag-image me-2"
                      />
                      Hindi
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
      </Navbar>
    </>
  );
}