import React from 'react';
import TextInput from '../../components/TextInput';
import FormButton from '../../components/FormButton';

const Form = () => {
  return (
    <div className='form-wrapper'>
      <form data-testid='login-form-test'>
        <TextInput
          label='Email'
          labelFor='email'
          inputId='email'
          inputType='email'
        />

        <TextInput
          label='Password'
          labelFor='password'
          inputId='password'
          inputType='password'
        />

        <FormButton label='Sign in' />
      </form>
    </div>
  );
};

export default Form;
