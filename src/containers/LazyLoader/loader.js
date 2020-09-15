import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Loader = () => {
  return (
    <SkeletonTheme color="#313236" highlightColor="#49494D">
      <div className="skeleton-header">
        <span className="skeleton__menu-bar">
          <Skeleton />
        </span>
        <span className="skeleton__user-img">
          <Skeleton />
        </span>
      </div>

      <div className="container skeleton-details">
        <span className="skeleton__date">
          <Skeleton />
        </span>
        <span className="skeleton__day">
          <Skeleton />
        </span>
        <span className="skeleton__survey-img">
          <Skeleton />
        </span>
        <span className="skeleton__survey-title">
          <Skeleton />
        </span>
        <span className="skeleton__survey-desc">
          <Skeleton />
        </span>
        <span className="skeleton__navigation">
          <Skeleton />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default Loader;
