import React from 'react';

import logo from 'images/logo_white.png';

const Logo = ({ label }) => {
  return (
    <div className="auth-logo">
      <img src={ logo } alt="NIMBLE" className="auth-logo__img" />
      <p className="auth-logo__label">{ label }</p>
    </div>
  );
};

export default Logo;
