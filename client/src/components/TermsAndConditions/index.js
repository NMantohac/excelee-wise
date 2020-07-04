import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import TermsandConditionsPDF from '../../pdf/terms-and-conditions.pdf';
import './style.css';

const TermsAndConditions = () => {
  return (
    <div>
      <Jumbotron className="terms-jumbotron">
        <Container>
          <p className="terms-jumbotron-text">Terms and Conditions</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
            <a href={TermsandConditionsPDF} target="_blank" rel="noopener noreferrer">
              <p>Click this link to read more about our Terms and Conditions</p>
            </a>
            <p>Last updated: June 30, 2020</p>
            <p>
              Please read these terms and conditions carefully before using Our
              Service.
            </p>

            <h3>Acknowledgment</h3>
            <p>
              These are the Terms and Conditions governing the use of this
              Service and the agreement that operates between You and the
              Company. These Terms and Conditions set out the rights and
              obligations of all users regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions.
              These Terms and Conditions apply to all visitors, users and others
              who access or use the Service.
            </p>
            <p>
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </p>
            <p>
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>
            <h3>Intellectual Property</h3>
            <p>
              The Service and its original content (excluding Content provided
              by You or other users), features and functionality are and will
              remain the exclusive property of the Company and its licensors.
            </p>
            <p>
              The Service is protected by copyright, trademark, and other laws
              of both the Country and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with
              any product or service without the prior written consent of the
              Company.
            </p>
            <h3>Your Feedback to Us</h3>
            <p>
              You assign all rights, title and interest in any Feedback You
              provide the Company. If for any reason such assignment is
              ineffective, You agree to grant the Company a non-exclusive,
              perpetual, irrevocable, royalty free, worldwide right and license
              to use, reproduce, disclose, sub-license, distribute, modify and
              exploit such Feedback without restriction.
            </p>
            <h3>Links to Other Websites</h3>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by the Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any third
              party web sites or services. You further acknowledge and agree
              that the Company shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with the use of or reliance on any such
              content, goods or services available on or through any such web
              sites or services.
            </p>
            <p>
              We strongly advise You to read the terms and conditions and
              privacy policies of any third-party web sites or services that You
              visit.
            </p>
            <h3>Termination</h3>
            <p>
              We may terminate or suspend Your access immediately, without prior
              notice or liability, for any reason whatsoever, including without
              limitation if You breach these Terms and Conditions.
            </p>
            <p>
              Upon termination, Your right to use the Service will cease
              immediately.
            </p>
            <h3>Limitation of Liability</h3>
            <p>
              Notwithstanding any damages that You might incur, the entire
              liability of the Company and any of its suppliers under any
              provision of this Terms and Your exclusive remedy for all of the
              foregoing shall be limited to the amount actually paid by You
              through the Service or 100 USD if You haven't purchased anything
              through the Service.
            </p>
            <p>
              To the maximum extent permitted by applicable law, in no event
              shall the Company or its suppliers be liable for any special,
              incidental, indirect, or consequential damages whatsoever
              (including, but not limited to, damages for loss of profits, loss
              of data or other information, for business interruption, for
              personal injury, loss of privacy arising out of or in any way
              related to the use of or inability to use the Service, third-party
              software and/or third-party hardware used with the Service, or
              otherwise in connection with any provision of this Terms), even if
              the Company or any supplier has been advised of the possibility of
              such damages and even if the remedy fails of its essential
              purpose.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or
              limitation of liability for incidental or consequential damages,
              which means that some of the above limitations may not apply. In
              these states, each party's liability will be limited to the
              greatest extent permitted by law.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
