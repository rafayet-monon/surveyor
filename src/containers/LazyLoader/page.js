import React from 'react';

import BackgroundLayout from 'components/BackgroundLayout';
import Loader from 'containers/LazyLoader/loader';

const Page = () => {
  return (
    <div className="skeleton">
      <BackgroundLayout>
        <Loader />
      </BackgroundLayout>
    </div>
  );
};

export default Page;
