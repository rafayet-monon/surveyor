import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import closeIcon from 'images/close-button-white.svg';

const QuitSurvey = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const returnToHome = () => history.push('/');

  return (
    <React.Fragment>
      <img onClick={ handleShow } src={ closeIcon } alt="close" role="presentation" />

      { show
        ? ReactDOM.createPortal(
          <React.Fragment>
            <div
              className="quit-survey-modal__container"
              aria-modal
              aria-hidden
              tabIndex={ -1 }
              role="dialog"
            >
              <div className="quit-survey-modal__content">
                <div className="quit-survey-modal__header">Warning!</div>
                <div className="quit-survey-modal__body">
                  Are you sure you want to quit the survey?
                </div>
                <div className="quit-survey-modal__footer">
                  <button
                    type="submit"
                    className="button button--primary quit-survey-modal__yes-button"
                    onClick={ returnToHome }
                  >
                    Yes
                  </button>

                  <button
                    type="submit"
                    className="button button--primary quit-survey-modal__cancel-button"
                    onClick={ handleClose }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>,
          document.body
        )
        : null }
    </React.Fragment>
  );
};

export default QuitSurvey;
