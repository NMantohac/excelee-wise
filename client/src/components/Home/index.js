import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import ModalImage from 'react-modal-image';
import bg1 from '../../images/bg-1.jpg';
import bg1Full from '../../images/bg-1-full.jpg';
import bg2 from '../../images/bg-2.jpg';
import bg2Full from '../../images/bg-2-full.jpg';
import bg3 from '../../images/bg-3.jpg';
import bg3Full from '../../images/bg-3-full.jpg';
import bg4 from '../../images/bg-4.jpg';
import bg4Full from '../../images/bg-4-full.jpg';
import bg5 from '../../images/bg-5.jpg';
import bg5Full from '../../images/bg-5-full.jpg';
import bg6 from '../../images/bg-6.jpg';
import bg6Full from '../../images/bg-6-full.jpg';
import './style.css';

const Home = () => {
  return (
    <div>
      <Jumbotron className="jumbotron-background">
        <Container>
          <p className="jumbotron-text">Assisting the Homeless</p>
        </Container>
      </Jumbotron>
      <hr />
      <Container style={{ fontFamily: 'Amatic SC, serif', textAlign: 'center' }}>
        <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small={bg1} large={bg1Full} showRotate="true" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <Slide right>
              <p className="home-text-1">When troubles crossed</p>
              <p className="home-text-2">path on you</p>
            </Slide>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <Slide left>
              <p className="home-text-3">Hope is never</p>
              <p className="home-text-4">forgotten</p>
            </Slide>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small={bg2} large={bg2Full} showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small={bg3} large={bg3Full} showRotate="true" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <Slide right>
              <p className="home-text-5">PHPLA the acronym</p>
              <p className="home-text-6">of help</p>
            </Slide>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <Slide left>
              <p className="home-text-7">Recovery is</p>
              <p className="home-text-8">forthcoming</p>
            </Slide>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small={bg4} large={bg4Full} showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small={bg5} large={bg5Full} showRotate="true" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <Slide right>
              <p className="home-text-9">An afterthought</p>
              <p className="home-text-10">of joy</p>
            </Slide>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <Slide left>
              <p className="home-text-11">Feeling blessed</p>
              <p className="home-text-12">with a smile</p>
            </Slide>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small={bg6} large={bg6Full} showRotate="true" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
