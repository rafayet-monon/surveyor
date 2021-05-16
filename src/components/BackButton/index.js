import React from 'react';

import { useHistory } from 'react-router-dom';

import backIcon from 'images/back-button-white.svg';

const BackButton = () => {
  const history = useHistory();
  const goBack = () => history.push('/');

  return (
    <div className="back-button">
      <div className="back-button__back-action">
        <button className="button" onClick={ goBack } data-test-id="back-button">
          <img src={ backIcon } alt="back" className="back-button__back-icon" />
        </button>
      </div>
    </div>
  );
};

export default BackButton;
