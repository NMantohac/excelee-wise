import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TermsJumbotron from '../../components/TermsJumbotron/TermsJumbotron.component';
import TermsContent from '../../components/TermsContent/TermsContent.component';

const TermsAndConditions = () => {
  return (
    <div>
      <TermsJumbotron />
      <Container>
        <Row>
          <Col style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
            <TermsContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
