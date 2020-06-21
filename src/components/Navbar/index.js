import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Image, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faHome, faUsers, faQuestionCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../images/navbar-brand.png';
import './style.css';

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.querySelector('.navbar').style.padding = '2px 10px';
    document.querySelector('.navbar-logo').style.height = '70px';
    document.querySelector('.navbar-logo').style.width = '150px';
  } else {
    document.querySelector('.navbar').style.padding = '10px 10px';
    document.querySelector('.navbar-logo').style.height = '100px';
    document.querySelector('.navbar-logo').style.width = '220px';
  }
}

window.onscroll = function () { scrollFunction(); };

const ReactNavbar = () => {
  // Used to highlight the current page that the user is currently on in the navbar
  const location = useLocation();

  return (
    <div style={{ height: '130px' }}>
      <Navbar bg="light" expand="lg" sticky="top" className="navbar">

        <Navbar.Brand as={Link} to="/" style={{ marginLeft: '5px' }}>
          <Image src={LogoImg} fluid className="d-inline-block align-top logo navbar-logo" alt="Brand Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

        <Navbar.Collapse>
          <Nav className="ml-auto" activeKey="/">
            <ul className="navbar-ul">
              <li className="navbar-li">
                <Nav.Link href="tel:833-467-4752" className="navbar-phone nav-link">
                  <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '5px' }} />
                </Nav.Link>
              </li>
              <li className="navbar-li">
                <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'nav-link active navbar-home' : 'nav-link navbar-home'}>
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
                  Home
                </Nav.Link>
              </li>
              <li className="navbar-li">
                <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'nav-link active navbar-about' : 'nav-link navbar-about'}>
                  <FontAwesomeIcon icon={faUsers} style={{ marginRight: '5px' }} />
                  About Us
                </Nav.Link>
              </li>
              <Nav.Link href="mailto:info@phplosangeles.org" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" size="lg" className="navbar-help-button" style={{ marginTop: '-8px', borderRadius: '25px', fontSize: '18px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '6px' }} />
                  Help
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/donate" className={location.pathname === '/donate' ? 'nav-link active' : 'nav-link'} style={{ fontSize: '18px' }}>
                <Button variant="outline-danger" className="navbar-donate-button" size="lg" style={{ marginTop: '-8px', borderRadius: '25px', fontSize: '18px' }}>
                  <FontAwesomeIcon icon={faHeart} style={{ marginRight: '10px' }} />
                  Donate
                </Button>
              </Nav.Link>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ReactNavbar;
