import React from 'react';

const InfoDescription = ({ description }) => {
  return (
    <div>
      <p className="auth-alert__info">{ description }</p>
    </div>
  );
};

export default InfoDescription;
