import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LogoImg from '../../images/footer-logo.png';
import './style.css';

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="align-items-center">
          <MDBCol md="6" lg="7">
            <Image src={LogoImg} height="300" width="550" fluid className="d-inline-block align-top logo" alt="Brand Logo" style={{ marginTop: '20px' }} />
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://www.google.com" className="btn-floating btn-sm btn-fb mx-1">
                  <i className="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.com" className="btn-floating btn-sm btn-tw mx-1">
                  <i className="fab fa-twitter"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.com" className="btn-floating btn-sm btn-gplus mx-1">
                  <i className="fab fa-google-plus"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.com" className="btn-floating btn-sm btn-li mx-1">
                  <i className="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.com" className="btn-floating btn-sm btn-dribbble mx-1">
                  <i className="fab fa-dribbble"> </i>
                </a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="5">
            <h5 className="text-uppercase font-weight-bold">
              Contact
            </h5>
            <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '90px', background: 'black' }} />
            <ul className="list-unstyled" style={{ fontSize: '15px' }}>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
                <a href="https://www.google.com/maps/dir//people+helping+people+in+los+angeles+inc/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2c79e0409138f:0x50a63f61975f8a77!2m2!1d-118.2745293!2d34.057139899999996" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  1930 Wilshire Blvd Ste 506 Los Angeles, CA 90057
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                <a href="mailto:info@phplosangeles.org" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  info@phplosangeles.org
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} />
                <a href="tel:833-467-4752" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  (833) 467-4752
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faFax} style={{ marginRight: '10px' }} />
                <a href="tel:818-812-6590" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  (818) 812-6590
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
              <FontAwesomeIcon icon={faFacebook} className="logo-facebook" style={{ color: '#4267B2', fontSize: '32px' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
              <FontAwesomeIcon icon={faTwitter} className="logo-twitter" style={{ color: '#1DA1F2', fontSize: '32px' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
              <FontAwesomeIcon icon={faInstagram} className="logo-instagram" style={{ color: '#C13584', fontSize: '32px' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
              <FontAwesomeIcon icon={faYoutube} className="logo-youtube" style={{ color: '#FF0000', fontSize: '32px' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
              <FontAwesomeIcon icon={faPinterest} className="logo-pinterest" style={{ color: '#E60023', fontSize: '32px' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
              <FontAwesomeIcon icon={faLinkedin} className="logo-linkedin" style={{ color: '#2867B2', fontSize: '32px' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="6" lg="8" className="text-md-left">
              <p className="text-muted" style={{ fontSize: '14px', marginLeft: '5px' }}>
                &copy; Copyright {new Date().getFullYear()} People Helping People In Los Angeles Inc. All Rights Reserved. Designed by <strong style={{ color: '#fe6902' }}>JR Engine</strong>
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4">
              <Nav className="justify-content-end" style={{ marginTop: '-15px' }}>
                <Nav.Link as={Link} to="/privacy" className="text-muted link-privacy" style={{ color: 'black', fontSize: '14px' }}>
                  Privacy |
                </Nav.Link>
                <Nav.Link as={Link} to="/terms-conditions" className="text-muted link-terms" style={{ marginLeft: '-28px', color: 'black', fontSize: '14px' }}>
                  Terms and Conditions
                </Nav.Link>
              </Nav>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};


export default Footer;
