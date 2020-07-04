import React from 'react';
import { Alert } from 'react-bootstrap';

const HelpMessageSuccess = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Message successfully sent!</Alert.Heading>
      <p>
        Thank you for your message! We will reply back to you as soon as possible.
      </p>
    </Alert>
  );
};

export default HelpMessageSuccess;
