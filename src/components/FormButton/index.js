import React from 'react';

const FormButton = ({ label }) => {
  return (
    <div>
      <button type="submit" className="button button--white">
        { label }
      </button>
    </div>
  );
};

export default FormButton;
