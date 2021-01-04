import React, { useContext } from 'react';

import PageBackground from 'components/PageBackground';
import Sidebar from 'components/Sidebar';
import { BackgroundContext } from 'contexts/background';
import BlankSlate from 'screens/Home/blankSlate';
import Header from 'screens/Home/header';
import SurveyList from 'screens/Home/surveyList';

const Details = ({ surveyResponse }) => {
  const backgroundContext = useContext(BackgroundContext);

  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  return (
    <PageBackground
      type="image"
      imagePath={ backgroundContext.state.currentBackground }
    >
      <div className="home">
        <Header />
        <Sidebar />
        <div className="home__detail">
          <p className="home__date">{ today }</p>
          <h1 className="home__day">Today</h1>
          { surveyResponse.meta.records === 0 ? (
            <BlankSlate />
          ) : (
            <SurveyList surveyResponse={ surveyResponse } />
          ) }
        </div>
      </div>
    </PageBackground>
  );
};

export default Details;
