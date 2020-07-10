import React from 'react';
import { Alert } from 'react-bootstrap';

const HelpMessageFailure = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Message failed to send!</Alert.Heading>
      <p>
        Something went wrong. Please try again or come back another time.
      </p>
    </Alert>
  );
};

export default HelpMessageFailure;
