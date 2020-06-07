import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Image, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import LogoImg from '../../images/Navbar-Brand.jpg';
// import LogoImg from '../../images/Navbar-Brand1.png';
// import LogoImg from '../../images/Navbar-Brand2.png';
// import LogoImg from '../../images/Navbar-Brand3.png';
// import LogoImg from '../../images/Navbar-Brand4.png';
// import LogoImg from '../../images/Navbar-Brand5.png';
import LogoImg from '../../images/Navbar-Brand6.png';
// import LogoImg1 from '../../images/Navbar-Logo.svg';
// import './style.css';

const ReactNavbar = () => {
  // Used to highlight the current page that the user is currently on in the navbar
  const location = useLocation();

  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: '#ff8c19', height: '15vh' }}>

      <Navbar.Brand as={Link} to="/">
        <Image src={LogoImg} height="100" width="250" className="d-inline-block align-top logo" alt="Brand Logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'nav-link active' : 'nav-link'} style={{ color: 'black', fontSize: '24px' }}>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ReactNavbar;
