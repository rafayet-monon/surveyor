import React from 'react';

const BackgroundLayout = ({ backgroundImage, children }) => {
  return (
    <div className="background-layout">
      <div
        className="background-layout__image"
        data-testid="background-image-test"
        style={{ background: `url(${backgroundImage}), #000` }}
      >
        <div className="background-layout__overlay">{ children }</div>
      </div>
    </div>
  );
};

export default BackgroundLayout;
