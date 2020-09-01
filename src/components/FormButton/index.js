import React from 'react';

const FormButton = ({ label, isDisabled }) => {
  return (
    <div className="form-button">
      <button
        type="submit"
        className="btn form-button__button--white"
        disabled={ isDisabled }
      >
        { label }
      </button>
    </div>
  );
};

export default FormButton;
