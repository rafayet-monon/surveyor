import React from 'react';
import BackgroundLayout from '../../components/backgroundLayout';
import backgroundImage from '../../images/backgrounds/authentication_background.png';
import LogoWithLabel from '../../components/logoWithLabel';
import TextInput from '../../components/textInput';
import FormButton from '../../components/formButton';

const Login = () => {
  const label = 'Sign in to Nimble';
  return (
    <div>
      <BackgroundLayout backgroundImage={backgroundImage}>
        <div className='container'>
          <div className='login-wrapper'>
            <LogoWithLabel label={label} />

            <div className='form-wrapper'>
              <form>
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
          </div>
        </div>
      </BackgroundLayout>
    </div>
  );
};

export default Login;
