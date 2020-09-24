import React from 'react';

import PageBackground from 'components/PageBackground';
import Loader from 'screens/LazyLoader/loader';

const LazyLoader = () => {
  return (
    <PageBackground dynamicImage={ null }>
      <Loader />
    </PageBackground>
  );
};

export default LazyLoader;
