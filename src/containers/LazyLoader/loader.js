import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Loader = () => {
  return (
    <SkeletonTheme color="#313236" highlightColor="#49494D">
      <div className="skeleton-header">
        <span className="skeleton-header__menu-bar">
          <Skeleton />
        </span>
        <span className="skeleton-header__user-image">
          <Skeleton />
        </span>
      </div>

      <div className="container skeleton-details">
        <span className="skeleton-details__date">
          <Skeleton />
        </span>
        <span className="skeleton-details__day">
          <Skeleton />
        </span>
        <span className="skeleton-details__survey-img">
          <Skeleton />
        </span>
        <span className="skeleton-details__survey-title">
          <Skeleton />
        </span>
        <span className="skeleton-details__survey-desc">
          <Skeleton />
        </span>
        <span className="skeleton-details__navigation">
          <Skeleton />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default Loader;
