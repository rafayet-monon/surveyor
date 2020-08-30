import React from 'react';

import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

const Info = ({ title, description }) => {
  return (
    <div className="row auth-alert">
      <div className="col-2">
        <div className="auth-alert__icon">
          <img src={ bellIcon } alt="Info" data-testid="info-icon-test" />
        </div>
      </div>
      <div className="col-10 pl-0">
        <div className="auth-alert__message">
          <p className="auth-alert__title" data-testid="info-title-test">
            { title }
          </p>

          <p className="auth-alert__info" data-testid="info-description-test">
            { description }
          </p>
        </div>
      </div>
    </div>
  );
};

const Error = ({ title, description }) => {
  return (
    <div className="row auth-alert">
      <div className="col-2">
        <div className="auth-alert__icon">
          <img src={ errorIcon } alt="Info" data-testid="error-icon-test" />
        </div>
      </div>
      <div className="col-10 pl-0">
        <div className="auth-alert__message">
          <p className="auth-alert__title" data-testid="error-title-test">
            { title }
          </p>

          <p className="auth-alert__error" data-testid="error-description-test">
            { description }
          </p>
        </div>
      </div>
    </div>
  );
};

export { Info, Error };
