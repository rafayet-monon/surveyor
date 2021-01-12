import React from 'react';

import { render } from '@testing-library/react';
import 'tests/__mocks__/matchMedia';

import Sidebar from 'components/Sidebar';
import { AuthContext } from 'contexts/auth';

describe('When Sidebar component is mounted', () => {
  const state = { isAuthenticated: true };
  const dispatch = null;

  it('shows user name in the menu', async () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Sidebar name={ 'mockName' } />
      </AuthContext.Provider>
    );
    const userName = await getByText('mockName');

    expect(userName).toBeInTheDocument();
  });

  it('shows logout link', async () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Sidebar />
      </AuthContext.Provider>
    );
    const logoutText = await getByText('Logout');

    expect(logoutText).toBeInTheDocument();
  });
});
