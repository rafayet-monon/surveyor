import React from 'react';

const FormButton = ({ label }) => {
  return (
    <div className="form-button">
      <button type="submit" className="form-button__button--white">
        { label }
      </button>
    </div>
  );
};

export default FormButton;
