import React, { useEffect, useState } from 'react';

import defaultImage from 'images/auth_background.png';

const PageBackground = ({ type, imagePath, children }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    switch (type) {
      case 'default': {
        setBackgroundImage(defaultImage);

        break;
      }
      case 'image': {
        setBackgroundImage(imagePath);

        break;
      }
    }
  }, [backgroundImage, imagePath, type]);

  return (
    <div className="page-background">
      <div
        className="page-background__image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label="page-background-image"
      >
        <div className="page-background__overlay">{ children }</div>
      </div>
    </div>
  );
};

export default PageBackground;
