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
              className="modal modal-quit-survey__container"
              aria-modal
              aria-hidden
              tabIndex={ -1 }
              role="dialog"
            >
              <div className="modal-quit-survey__content">
                <div className="modal-quit-survey__header">Warning!</div>
                <div className="modal-quit-survey__body">
                  Are you sure you want to quit the survey?
                </div>
                <div className="modal-quit-survey__footer">
                  <button
                    type="submit"
                    className="button button--primary modal-quit-survey__yes-button"
                    onClick={ returnToHome }
                  >
                    Yes
                  </button>

                  <button
                    type="submit"
                    className="button button--primary"
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