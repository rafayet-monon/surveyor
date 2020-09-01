import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Loader = () => {
  return (
    <SkeletonTheme color="#313236" highlightColor="#49494D">
      <div className="skeleton-header">
        <span className="skeleton__menu-bar">
          <Skeleton height={ 18 } width={ 117 } />
        </span>
        <span className="skeleton__user-img">
          <Skeleton circle={ true } height={ 36 } width={ 36 } />
        </span>
      </div>

      <div className="container skeleton-details">
        <span className="skeleton__date">
          <Skeleton height={ 18 } width={ 117 } />
        </span>
        <span className="skeleton__day">
          <Skeleton height={ 18 } width={ 90 } />
        </span>
        <span className="skeleton__survey-img">
          <Skeleton height={ 250 } />
        </span>
        <span className="skeleton__survey-title">
          <Skeleton height={ 18 } width={ 318 } />
        </span>
        <span className="skeleton__survey-desc">
          <Skeleton height={ 18 } width={ 207 } />
        </span>
        <span className="skeleton__navigation">
          <Skeleton circle={ true } height={ 56 } width={ 56 } />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default Loader;
