import React from 'react';

import logo from 'images/logo_white.png';
import userImage from 'images/user-placeholder.jpg';

const Header = () => {
  return (
    <div className="home-header">
      <div className="home-header__left">
        <img src={ logo } alt="NIMBLE" className="home-header__logo" />
      </div>
      <div className="home-header__right">
        <img src={ userImage } alt="USER" className="home-header__user-image" />
      </div>
    </div>
  );
};

export default Header;
