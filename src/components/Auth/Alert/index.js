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
    <div className="auth-alert">
      <div className="auth-alert__icon">
        <img src={ alert.icon } alt={ alert.type } />
      </div>

      <div className="auth-alert__message">
        <p className="auth-alert__title">{ title }</p>

        <p className={ `auth-alert__${alert.type}` }>{ description }</p>
      </div>
    </div>
  );
};

export default Alert;
