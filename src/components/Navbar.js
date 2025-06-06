import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Button,
  Modal,
} from "react-bootstrap";
import "./Navbar.css";
import Mainlogo from "../assets/Mainlogo.png";
import india from "../assets/india.jpg";
import us from "../assets/us.jpg";

export default function CustomNavbar() {
  const [show, setShow] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);

  // Detect screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 992); // lg = 992px
    };

    checkScreenSize(); // check on initial render
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="py-3 shadow-sm custom-navbar"
        style={{ backgroundColor: "rgba(31, 41, 55, 1)" }}
      >
        <Container fluid className="d-flex flex-column ">
          <div class=" w-100">
            {/* First Row */}
            <Row className="w-100 mb-5 align-items-center ">
              <Col md={4} className="box-logo">
                <a class="navbar-brand brand" href="#">
                  <img
                    src={Mainlogo}
                    alt="Logo"
                    className="Mainlogo  box-img "
                  />
                </a>
              </Col>
              {isSmallScreen && (
                <Col md={5} className="box-button">
                  <Button
                    variant="outline-light modal-button"
                    onClick={handleToggle}
                  >
                    <i className="fas fa-bars box-icon"></i>
                  </Button>
                </Col>
              )}

              <Col md={4} className="box-search">
                <div className="navSearch-box d-flex align-items-center box-input ">
                  <input
                    type="text"
                    placeholder="Search by OEM code"
                    className="navSearch "
                  />
                
                  <Col md={4} className="box-glass">
                    <i className="bi bi-search navSearch-button text-white "></i>
                    </Col>
             
                </div>
              </Col>

           

              {!isSmallScreen && (
                <Col
                  md={3}
                  className="d-flex justify-content-end align-items-center"
                >
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
              )}
            </Row>
          </div>

          {!isSmallScreen && (
            <Row className="w-100 align-items-center">
              {" "}
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
                        <img
                          src={us}
                          alt="US Flag"
                          className="flag-image me-2"
                        />
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
          )}
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-side slide-in-right"
        contentClassName="bg-dark text-white"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton closeVariant="white">
          <Row className="w-100 align-items-center">
            {" "}
            <Col
              md={3}
              className="d-flex justify-content-end align-items-center"
            >
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
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={handleClose} className="text-white">
              <div className="contact">Whatsapp: wa.me/48453094174</div>
            </Nav.Link>
            <Nav.Link onClick={handleClose} className="text-white">
              <Col md={3} className="d-flex justify-content-end drop">
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
                        <img
                          src={us}
                          alt="US Flag"
                          className="flag-image me-2"
                        />
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
            </Nav.Link>
            <Nav.Link onClick={handleClose} href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link
              onClick={handleClose}
              href="#about"
              className="text-white"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={handleClose}
              href="#services"
              className="text-white"
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={handleClose}
              href="#contact"
              className="text-white"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Modal.Body>
      </Modal>
    </>
  );
}
