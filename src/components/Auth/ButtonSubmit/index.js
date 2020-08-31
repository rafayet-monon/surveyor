import React from 'react';

const ButtonSubmit = ({ label }) => {
  return (
    <div className="button-submit">
      <button type="submit" className="btn btn--form-white">
        { label }
      </button>
    </div>
  );
};

export default ButtonSubmit;
