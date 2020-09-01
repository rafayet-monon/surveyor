import React from 'react';

const ErrorDescription = ({ description }) => {
  return (
    <div>
      <p className="auth-alert__error">{ description }</p>
    </div>
  );
};

export default ErrorDescription;
