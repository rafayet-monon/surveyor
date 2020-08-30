import React from 'react';

import logo from 'images/logo_white.png';

const Logo = ({ label }) => {
  return (
    <div className="row">
      <div className="logo-auth">
        <img
          src={ logo }
          alt="NIMBLE"
          className="logo-auth__img"
          data-testid="logo-test"
        />
        <p className="logo-auth__label">{ label }</p>
      </div>
    </div>
  );
};

export default Logo;
