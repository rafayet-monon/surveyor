import React from 'react';

const ButtonSubmit = ({ label }) => {
  return (
    <div className="button-submit">
      <button type="submit" className="btn button-submit__btn--white">
        { label }
      </button>
    </div>
  );
};

export default ButtonSubmit;
