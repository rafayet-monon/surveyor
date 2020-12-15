import React, { useState } from 'react';

import userImage from 'images/user-placeholder.jpg';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    localStorage.clear();

    window.location.href = '/login';
  };

  return (
    <div className="sidebar">
      <img
        src={ userImage }
        alt="USER"
        className="sidebar__user-image"
        onClick={ showSidebar }
        onKeyDown={ showSidebar }
        role="presentation"
      />

      <nav
        className={
          sidebar
            ? 'sidebar__nav-menu sidebar__nav-menu-active'
            : 'sidebar__nav-menu'
        }
      >
        <ul className="sidebar__nav-menu-items">
          <li className="sidebar__nav-menu-information">
            <span className="sidebar__nav-menu-username">Mai</span>
            <span className="sidebar__nav-menu-image">
              <img
                src={ userImage }
                alt="USER-NAV"
                className="sidebar__user-image"
                onClick={ showSidebar }
                onKeyDown={ showSidebar }
                role="presentation"
              />
            </span>
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
