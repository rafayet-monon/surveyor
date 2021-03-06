import React from 'react';

import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import FormInputGroup from 'components/Auth/FormInputGroup';

describe('When FormInputGroup component is mounted', () => {
  const label = 'Email';
  const inputId = 'email';
  const inputType = 'email';
  const name = 'email';
  const mockSubmit = jest.fn();
  const initialValues = {};
  const history = createMemoryHistory();

  it('renders label with props', () => {
    const { getByLabelText } = render(
      <Formik initialValues={ initialValues } onSubmit={ mockSubmit }>
        <Form>
          <FormInputGroup
            label={ label }
            inputId={ inputId }
            inputType={ inputType }
            name={ name }
          />
        </Form>
      </Formik>
    );
    const inputLabel = getByLabelText(label);

    expect(inputLabel).toBeInTheDocument();
  });

  it('renders input with props', () => {
    const { getByRole } = render(
      <Formik initialValues={ initialValues } onSubmit={ mockSubmit }>
        <Form>
          <FormInputGroup
            label={ label }
            inputId={ inputId }
            inputType={ inputType }
            name={ name }
          />
        </Form>
      </Formik>
    );
    const textInput = getByRole('textbox', { type: inputType, id: inputId });

    expect(textInput).toBeInTheDocument();
  });

  it('renders forgot password link if inputType is password', () => {
    const passInputType = 'password';
    const { getByText } = render(
      <Router history={ history }>
        <Formik initialValues={ initialValues } onSubmit={ mockSubmit }>
          <Form>
            <FormInputGroup
              label={ label }
              inputId={ inputId }
              inputType={ passInputType }
              name={ name }
              forgotPassLink={ true }
            />
          </Form>
        </Formik>
      </Router>
    );
    const forgotPass = getByText(/Forgot/i);

    expect(forgotPass).toBeInTheDocument();
  });
});
