import React from 'react';

const BackgroundLayout = ({ backgroundImage, children }) => {
  return (
    <div
      className='background-layout'
      data-testid='background-image-test'
      style={{ background: `url(${backgroundImage}), #000` }}
    >
      <div className='background-overlay'>{children}</div>
    </div>
  );
};

export default BackgroundLayout;
