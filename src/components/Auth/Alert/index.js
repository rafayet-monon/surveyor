import React, { useEffect, useState } from 'react';

import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

const Alert = ({ alertType, title, description }) => {
  const [alert, setAlert] = useState({ type: 'info', icon: bellIcon });

  useEffect(() => {
    if (alertType === 'error') {
      setAlert({ type: 'error', icon: errorIcon });
    }
  }, [alertType]);

  return (
    <div className="row auth-alert">
      <div className="col-2">
        <div className="auth-alert__icon">
          <img src={ alert.icon } alt={ alert.type } />
        </div>
      </div>
      <div className="col-10 pl-0">
        <div className="auth-alert__message">
          <p className="auth-alert__title">{ title }</p>

          <p className={ `auth-alert__${alert.type}` }>{ description }</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
