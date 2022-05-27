import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  }

  return (
    <Navbar expand="lg" className='fixed-top bg-light'>
      <Container>
        <Link to={'/'}>
            <img src="https://i.ibb.co/Rc7DBPQ/furnicorner-logo.png" alt="Furnicorner logo" className='logo' />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='ms-3 ms-md-0'>
          <Nav className='ms-auto'>
              {
                user ? <><Link className='nav-link' to="/add-item">Add Item</Link>
                <Link className='nav-link' to="/my-items">My Items</Link><button onClick={handleLogOut} className='btn nav-link'>Log out</button></> : <> <Link className='nav-link' to="/login">Login</Link>
                <Link className='nav-link' to="/Register">Register</Link> </>
              }
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
