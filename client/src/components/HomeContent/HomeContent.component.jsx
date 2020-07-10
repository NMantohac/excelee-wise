import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import ModalImage from 'react-modal-image';
import './HomeContent.styles.css';

const HomeContent = () => {
  return (
    <div>
      <Container style={{ fontFamily: 'Amatic SC, serif', textAlign: 'center' }}>
        <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-1_f3paxc.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410102/bg-1-full_rhizya.jpg" showRotate="true" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410102/bg-2_f2gy1t.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410103/bg-2-full_tzldtu.jpg" showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410103/bg-3_qpatbi.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410103/bg-3-full_zhhhge.jpg" showRotate="true" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410100/bg-4_pj21gx.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-4-full_rjn5mb.jpg" showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410100/bg-5_kyfu1r.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-5-full_m54ur9.jpg" showRotate="true" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-6_tk4opq.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-6-full_lwevrl.jpg" showRotate="true" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
