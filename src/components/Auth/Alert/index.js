import React from 'react';

import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

const Info = ({ title, description }) => {
  return (
    <div className="auth-alert">
      <div className="auth-alert__icon">
        <img src={ bellIcon } alt="Info" data-testid="info-icon-test" />
      </div>
      <div className="auth-alert__message">
        <span className="auth-alert__title" data-testid="info-title-test">
          { title }
        </span>
        <span className="auth-alert__info" data-testid="info-description-test">
          { description }
        </span>
      </div>
    </div>
  );
};

const Error = ({ title, description }) => {
  return (
    <div className="auth-alert">
      <div className="auth-alert__icon">
        <img src={ errorIcon } alt="Error" data-testid="error-icon-test" />
      </div>
      <div className="auth-alert__message">
        <span className="auth-alert__title" data-testid="error-title-test">
          { title }
        </span>
        <span
          className="auth-alert__errors"
          data-testid="error-description-test"
        >
          { description }
        </span>
      </div>
    </div>
  );
};

export { Info, Error };
