import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.JPG";
import Loading from "../../Shared/Loading/Loading";

const Header = () => {
  let loadingEle;
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    loadingEle = (
      <p>
        <Loading></Loading>
      </p>
    );
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        error(error.message);
      });
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              style={{ borderRadius: "10px" }}
              height="50px"
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <>
                  {loadingEle}
                  <p className="text-warning mx-2 mt-2">{user?.displayName}</p>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline-light h-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
