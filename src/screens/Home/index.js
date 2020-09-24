import React from 'react';

import PageBackground from 'components/PageBackground';
import Details from 'screens/Home/details';
import Header from 'screens/Home/header';

const Home = () => {
  return (
    <PageBackground type='default'>
      <div className="container-home">
        <Header />
        <Details />
      </div>
    </PageBackground>
  );
};

export default Home;
