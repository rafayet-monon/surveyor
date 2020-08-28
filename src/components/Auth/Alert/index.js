import React from 'react';

import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

const Info = (title, subtitle) => {
  return (
    <div className="row auth-alert">
      <div className="auth-alert__icon">
        <img src={ errorIcon } alt="Info" />
      </div>
      <div className="auth-alert__message">
        <span className="auth-alert__title">{ title }</span>
        <span className="auth-alert__info">{ subtitle }</span>
      </div>
    </div>
  );
};

const Error = (title, subtitle) => {
  return (
    <div className="row auth-alert">
      <div className="auth-alert__icon">
        <img src={ bellIcon } alt="Error" />
      </div>
      <div className="auth-alert__message">
        <span className="auth-alert__title">{ title }</span>
        <span className="auth-alert__errors">{ subtitle }</span>
      </div>
    </div>
  );
};

export default { Info, Error };
