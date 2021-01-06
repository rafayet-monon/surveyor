import React, { useContext } from 'react';

import { AuthContext } from 'contexts/auth';

const Sidebar = ({ openSidebar }) => {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    window.location.href = '/login';
  };

  return (
    <div className="sidebar">
      <nav
        className={
          openSidebar
            ? 'sidebar__nav-menu sidebar__nav-menu-active'
            : 'sidebar__nav-menu'
        }
      >
        <ul className="sidebar__nav-menu-items">
          <li className="sidebar__nav-menu-information">
            <span className="sidebar__nav-menu-username">Mai</span>
          </li>
          <li className="sidebar__nav-menu-line" />
          <li
            className="sidebar__nav-menu-logout"
            onClick={ logout }
            onKeyDown={ logout }
            role="presentation"
          >
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
