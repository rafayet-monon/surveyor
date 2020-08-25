import React from 'react';

const FormButton = ({ label }) => {
  return (
    <div>
      <div className='button-wrapper'>
        <button
          data-testid='form-button-test'
          type='submit'
          className='btn button-custom'
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default FormButton;
