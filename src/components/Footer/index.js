import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../images/Navbar-Brand1.png';
import './style.css';

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="align-items-center">
          <MDBCol md="6" lg="8">
            <Image src={LogoImg} height="80" width="200" className="d-inline-block align-top logo" alt="Brand Logo" />
            <p style={{ marginTop: '10px', marginLeft: '5px' }}>
              People Helping People is a non-profit organization...
            </p>
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
          <MDBCol md="2" lg="4">
            <h5 className="text-uppercase font-weight-bold">
              Contact
            </h5>
            <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '90px', background: 'black' }} />
            <ul className="list-unstyled" style={{ fontSize: '15px' }}>
              <li>
                <FontAwesomeIcon icon={faMapMarkedAlt} style={{ marginRight: '10px' }} />
                <a href="https://www.google.com/maps/dir//people+helping+people+in+los+angeles+inc/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2c79e0409138f:0x50a63f61975f8a77!2m2!1d-118.2745293!2d34.057139899999996" target="_blank" rel="noopener noreferrer">
                  1930 Wilshire Blvd Ste 506, Los Angeles, CA 90057
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                <a href="mailto:info@phplosangeles.org" target="_blank" rel="noopener noreferrer">
                  info@phplosangeles.org
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} />
                <a href="tel:833-467-4752" target="_blank" rel="noopener noreferrer">
                  (833) 467-4752
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faFax} style={{ marginRight: '10px' }} />
                <a href="tel:818-812-6590" target="_blank" rel="noopener noreferrer">
                  (818) 812-6590
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-md-left">
              <p style={{ fontSize: '14px', marginLeft: '5px' }}>
                Copyright &copy; {new Date().getFullYear()} People Helping People in Los Angeles Inc.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-md-right">
              <p style={{ fontSize: '14px' }}>Privacy | Terms and Conditions</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};


export default Footer;
