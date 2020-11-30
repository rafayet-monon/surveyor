import React from 'react';

const FormButton = ({ label, isDisabled }) => {
  return (
    <div>
      <button
        type="submit"
        className="button button--primary"
        disabled={ isDisabled }
      >
        { label }
      </button>
    </div>
  );
};

export default FormButton;
