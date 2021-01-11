import React from 'react';

import logo from 'images/logo_white.png';

const Header = ({ onAvatarClick, avatar }) => {
  return (
    <div className="home-header">
      <div className="home-header__logo">
        <img src={ logo } alt="NIMBLE" className="home-header__site-logo" />
      </div>
      <div className="home-header__menu">
        <img
          src={ avatar }
          alt="USER"
          className="home-header__user-image"
          onClick={ onAvatarClick }
          onKeyDown={ onAvatarClick }
          role="presentation"
        />
      </div>
    </div>
  );
};

export default Header;
