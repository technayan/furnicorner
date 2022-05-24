import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className='fixed-top bg-light'>
      <Container>
        <Link to={'/'}>
            <img src="https://i.ibb.co/Rc7DBPQ/furnicorner-logo.png" alt="Furnicorner logo" className='logo' />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='ms-3 ms-md-0'>
          <Nav className='ms-auto'>
              <Link className='nav-link' to="/add-items">Add Items</Link>
              <Link className='nav-link' to="/my-items">My Items</Link>
              <Link className='nav-link' to="/login">Login</Link>
              <Link className='nav-link' to="/Register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
