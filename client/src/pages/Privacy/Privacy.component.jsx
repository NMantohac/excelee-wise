import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PrivacyJumbotron from '../../components/PrivacyJumbotron/PrivacyJumbotron.component';
import PrivacyContent from '../../components/PrivacyContent/PrivacyContent.component';

const Privacy = () => {
  return (
    <div>
      <PrivacyJumbotron />
      <Container>
        <Row>
          <Col style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
            <PrivacyContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Privacy;
