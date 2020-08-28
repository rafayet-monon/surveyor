import React from 'react';

const ButtonSubmit = ({ label }) => {
  return (
    <div className="button-submit">
      <button
        data-testid="form-button-test"
        type="submit"
        className="btn btn--form-white"
      >
        { label }
      </button>
    </div>
  );
};

export default ButtonSubmit;
