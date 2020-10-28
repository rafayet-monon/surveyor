import React from 'react';

import BlankSlate from 'screens/Home/blankSlate';

const Details = () => {
  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  return (
    <div className="home-detail">
      <span className="home-detail__date">{ today }</span>
      <span className="home-detail__day">Today</span>
      <BlankSlate />
    </div>
  );
};

export default Details;
