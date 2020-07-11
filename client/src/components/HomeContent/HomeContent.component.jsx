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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594504893/rsz_rsz_bg-1_f3paxc-min_vwooyb_igibdd.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594422060/rsz_bg-1_f3paxc-min_vwooyb.jpg" showRotate="true" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594504947/rsz_rsz_bg-2_f2gy1t-min_amvsdt_ayi1zm.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594422062/rsz_bg-2_f2gy1t-min_amvsdt.jpg" showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594504978/rsz_rsz_1bg-3_qpatbi-min_zihncf_c9pzsk.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594422064/rsz_1bg-3_qpatbi-min_zihncf.jpg" showRotate="true" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594505011/rsz_bg-4_pj21gx_jecvpg.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410100/bg-4_pj21gx.jpg" showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594505048/rsz_bg-5_kyfu1r_kgbndg.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410100/bg-5_kyfu1r.jpg" showRotate="true" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-6_tk4opq.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-6_tk4opq.jpg" showRotate="true" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
