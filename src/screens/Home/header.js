import React from 'react';

import logo from 'images/logo_white.png';
import userImage from 'images/user-placeholder.jpg';

const Header = ( { onClickUser }) => {
  return (
    <div className="home-header">
      <div className="home-header__logo">
        <img src={ logo } alt="NIMBLE" className="home-header__site-logo" />
      </div>
      <div className="home-header__menu">
        <img
          src={ userImage }
          alt="USER"
          className="home-header__user-image"
          onClick={ onClickUser }
          onKeyDown={ onClickUser }
          role="presentation"
        />
      </div>
    </div>
  );
};

export default Header;
