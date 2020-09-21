import React from 'react';

import BackgroundLayout from 'components/BackgroundLayout';
import Loader from 'screens/LazyLoader/loader';

const Page = () => {
  return (
    <BackgroundLayout>
      <Loader />
    </BackgroundLayout>
  );
};

export default Page;
