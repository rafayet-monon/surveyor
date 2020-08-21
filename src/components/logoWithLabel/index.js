import React from 'react';
import logo from '../../images/logo_white.png';

const LogoWithLabel = ({ label }) => {
  return (
    <div className='logo-label-wrapper'>
      <img src={logo} alt='NIMBLE' className='img-logo' />
      <span className='text-label'>{label}</span>
    </div>
  );
};

export default LogoWithLabel;
