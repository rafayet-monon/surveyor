import React from 'react';

import { render } from '@testing-library/react';
import '__mocks__/matchMedia';
import mockAxios from 'axios';

import Sidebar from 'components/Sidebar';
import { AuthContext } from 'contexts/auth';
import ProfileResponse from 'tests/fixtures/profileResponse.json';

describe('When Sidebar component is mounted', () => {
  const state = { isAuthenticated: true };
  const dispatch = null;

  mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: ProfileResponse, status: 200 })
  );

  it('shows user avatar', async () => {
    const { findByAltText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Sidebar />
      </AuthContext.Provider>
    );
    const userImage = await findByAltText('USER');

    expect(userImage).toHaveAttribute(
      'src',
      ProfileResponse.data.attributes.avatar_url
    );
  });

  it('shows user name and avatar in the menu', async () => {
    const { findByAltText, findByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Sidebar />
      </AuthContext.Provider>
    );
    const navImage = await findByAltText('USER-NAV');
    const userName = await findByText(ProfileResponse.data.type);

    expect(navImage).toHaveAttribute(
      'src',
      ProfileResponse.data.attributes.avatar_url
    );
    expect(userName).toBeInTheDocument();
  });

  it('shows logout link', async () => {
    const { findByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Sidebar />
      </AuthContext.Provider>
    );
    const logoutText = await findByText('Logout');

    expect(logoutText).toBeInTheDocument();
  });
});
