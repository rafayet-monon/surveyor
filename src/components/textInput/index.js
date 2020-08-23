import React from 'react';

const TextInput = ({ labelFor, label, inputType, inputId }) => {
  return (
    <div>
      <div className='text-input-wrapper'>
        <label htmlFor={labelFor} className='input-label'>
          {label}
        </label>
        <input
          type={inputType}
          id={inputId}
          className='form-control input-control'
        />
      </div>
    </div>
  );
};

export default TextInput;
