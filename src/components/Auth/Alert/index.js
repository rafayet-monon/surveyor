import React, { useEffect, useState } from 'react';

import ErrorDescription from 'components/Auth/Alert/errorDescription';
import InfoDescription from 'components/Auth/Alert/infoDescription';
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

          { alert.type === 'info'
            ? <InfoDescription description={ description } />
            : <ErrorDescription description={ description } />
          }
        </div>
      </div>
    </div>
  );
};

export default Alert;
