import React from 'react';

import Sidebar from 'components/Sidebar';
import logo from 'images/logo_white.png';

const Header = () => {
  return (
    <div className="home-header">
      <div className="home-header__logo">
        <img src={ logo } alt="NIMBLE" className="home-header__site-logo" />
      </div>
      <div className="home-header__menu">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
