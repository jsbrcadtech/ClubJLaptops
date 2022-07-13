import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const icon = (
    <span className="logo">
      <img src="/images/logo.png" alt="logo" width="190" />
    </span>
  );

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header>
      <Navbar className="navbar navbar-dark bg-primary" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>{icon}</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link eventKey="disabled" disabled>
                    <i className="fa-solid fa-user fa-fw"></i>
                    &nbsp; {`${user.name}`}
                  </Nav.Link>
                  <LinkContainer to="/products">
                    <Nav.Link>
                      <i className="fa fa-laptop fa-fw" aria-hidden="true"></i>
                      &nbsp; Laptops
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/">
                    <Nav.Link onClick={onLogout}>
                      <i className="fa-solid fa-arrow-right-to-bracket fa-fw"></i>
                      &nbsp; Sign Out
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fa-solid fa-arrow-right-to-bracket fa-fw"></i>
                      &nbsp; SIGN IN
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <i className="fa-solid fa-user-plus"></i>&nbsp; SIGN UP
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
