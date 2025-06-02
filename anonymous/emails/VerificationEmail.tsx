import * as React from 'react';

interface EmailTemplateProps {
  username: string;
  otp: string
}

const VerificationEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  username,otp
}) => (
  <div>
    <h1>Welcome, {username}!</h1>
    <h2>Your One Time Password: {otp}</h2>
  </div>
);

export default VerificationEmail;