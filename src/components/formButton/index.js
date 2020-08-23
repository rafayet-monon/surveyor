import React from 'react';

const FormButton = ({ label }) => {
  return (
    <div>
      <div className='button-wrapper'>
        <button type='submit' className='btn button-custom'>
          {label}
        </button>
      </div>
    </div>
  );
};

export default FormButton;
