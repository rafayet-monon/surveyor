import React from 'react';

const BackgroundLayout = ({ backgroundImage, children }) => {
  return (
    <div className="background-layout">
      <div
        className="background-layout__image"
        style={{ background: `url(${backgroundImage}), #000` }}
        aria-label="background-layout-image"
      >
        <div className="background-layout__overlay">{ children }</div>
      </div>
    </div>
  );
};

export default BackgroundLayout;
