import React, { useContext, useState, useEffect } from 'react';

import ProfileAdapter from 'adapters/profileAdapter';
import PageBackground from 'components/PageBackground';
import Sidebar from 'components/Sidebar';
import { AuthContext } from 'contexts/auth';
import { BackgroundContext } from 'contexts/background';
import BlankSlate from 'screens/Home/blankSlate';
import Header from 'screens/Home/header';
import SurveyList from 'screens/Home/surveyList';

const Details = ({ surveyResponse }) => {
  const backgroundContext = useContext(BackgroundContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const authContext = useContext(AuthContext);

  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      await ProfileAdapter.get(authContext.state.authorization_token).then(
        function (response) {
          if (response.status === 200) {
            setName(response.data.data.type);
            setAvatar(response.data.data.avatar_url);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageBackground
      type="image"
      imagePath={ backgroundContext.state.currentBackground }
    >
      <div className="home">
        <Header onAvatarClick={ showSidebar } avatar={ avatar } />
        <Sidebar openSidebar={ sidebar } name={ name } />
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
