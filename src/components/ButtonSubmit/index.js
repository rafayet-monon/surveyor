import React from 'react';

const ButtonSubmit = ({ label }) => {
  return (
    <div className="button-submit">
      <button type="submit" className="btn button-submit__button--white">
        { label }
      </button>
    </div>
  );
};

export default ButtonSubmit;
