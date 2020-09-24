import React from 'react';

import BlankSlate from 'screens/Home/blankSlate';

const Details = () => {
  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  return (
    <div className="home-details">
      <p className="home-details__date">{ today }</p>
      <h1 className="home-details__day">Today</h1>
      <BlankSlate />
    </div>
  );
};

export default Details;
