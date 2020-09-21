import React, { useEffect, useState } from 'react';

import defaultImage from 'images/auth_background.png';

const BackgroundLayout = ({ dynamicImage, noBackground, children }) => {
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);

  useEffect(() => {
    if (noBackground) {
      setBackgroundImage(null);
    } else if (dynamicImage) {
      setBackgroundImage(dynamicImage);
    }
  }, [dynamicImage, noBackground]);

  return (
    <div className="background-layout">
      <div
        className="background-layout__image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label="background-layout-image"
      >
        <div className="background-layout__overlay">{ children }</div>
      </div>
    </div>
  );
};

export default BackgroundLayout;
