import React, { useEffect, useState } from 'react';

import defaultImage from 'images/auth_background.png';

const PageBackground = ({ dynamicImage, children }) => {
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);

  useEffect(() => {
    if (dynamicImage !== undefined) {
      setBackgroundImage(dynamicImage);
    }
  }, [dynamicImage]);

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
