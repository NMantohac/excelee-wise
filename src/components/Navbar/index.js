import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Image, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faUsers, faQuestionCircle, faDonate } from '@fortawesome/free-solid-svg-icons';
// import LogoImg from '../../images/Navbar-Brand.jpg';
import LogoImg from '../../images/Navbar-Brand1.png';
// import LogoImg from '../../images/Navbar-Brand2.png';
// import LogoImg from '../../images/Navbar-Brand3.png';
// import LogoImg from '../../images/Navbar-Brand4.png';
// import LogoImg from '../../images/Navbar-Brand5.png';
// import LogoImg from '../../images/Navbar-Brand6.png';
// import LogoImg1 from '../../images/Navbar-Logo.svg';
import './style.css';

const ReactNavbar = () => {
  // Used to highlight the current page that the user is currently on in the navbar
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" sticky="top">

      <Navbar.Brand as={Link} to="/" style={{ marginLeft: '5px' }}>
        <Image src={LogoImg} height="100" width="250" fluid className="d-inline-block align-top logo" alt="Brand Logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ml-auto" activeKey="/home">
          <ul className="navbar-ul">
            <li className="navbar-li">
              <Nav.Link href="tel:833-467-4752" className="navbar-phone nav-link">
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} />
              </Nav.Link>
            </li>
            <li className="navbar-li">
              <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'nav-link active navbar-about' : 'nav-link navbar-about'}>
                <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px' }} />
                About Us
              </Nav.Link>
            </li>
            <li className="navbar-li">
              <Nav.Link as={Link} to="/help" className={location.pathname === '/help' ? 'nav-link active navbar-help' : 'nav-link navbar-help'}>
                <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '8px' }} />
                Help
              </Nav.Link>
            </li>
            <Nav.Link as={Link} to="/donate" className={location.pathname === '/donate' ? 'nav-link active' : 'nav-link'} style={{ fontSize: '18px' }}>
              <Button variant="outline-danger" size="lg" style={{ marginTop: '-10px' }}>
                <FontAwesomeIcon icon={faDonate} style={{ marginRight: '10px' }} />
                Donate
              </Button>
            </Nav.Link>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ReactNavbar;
