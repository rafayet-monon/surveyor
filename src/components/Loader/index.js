import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import PageBackground from 'components/PageBackground';

const Loader = () => {
  const themeColor = '#313236';
  const highlightColor = '#49494D';

  return (
    <PageBackground dynamicImage={ null }>
      <SkeletonTheme color={ themeColor } highlightColor={ highlightColor }>
        <div className="loader-header" aria-label="loader-header">
          <span className="loader-header__menu-bar">
            <Skeleton />
          </span>
          <span className="loader-header__user-image">
            <Skeleton />
          </span>
        </div>

        <div className="loader-details" aria-label="loader-details">
          <span className="loader-details__date">
            <Skeleton />
          </span>
          <span className="loader-details__day">
            <Skeleton />
          </span>
          <span className="loader-details__survey-img">
            <Skeleton />
          </span>
          <span className="loader-details__survey-title">
            <Skeleton />
          </span>
          <span className="loader-details__survey-desc">
            <Skeleton />
          </span>
          <span className="loader-details__navigation">
            <Skeleton />
          </span>
        </div>
      </SkeletonTheme>
    </PageBackground>
  );
};

export default Loader;
