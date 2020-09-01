import React from 'react';

import logo from 'images/logo_white.png';

const Logo = ({ label }) => {
  return (
    <div className="row logo-auth">
      <img src={ logo } alt="NIMBLE" className="logo-auth__img" />
      <p className="logo-auth__label">{ label }</p>
    </div>
  );
};

export default Logo;
