import "./userMenu.less";

import * as React from "react";

interface IUserName {
  isUserMenuOpen: boolean;
  toggleUserMenu: () => void;
}

const UserMenu: React.FC<IUserName> = ({ isUserMenuOpen, toggleUserMenu }) => {
  return (
    <div className={`user-menu-container ${isUserMenuOpen ? "open" : "close"}`}>
      <div className="backdrop" onClick={toggleUserMenu} />
      <div className="user-menu-options">
        <ul>
          <li>Raz</li>
          <li>Dva</li>
          <li>Tri</li>
          <li>Chet</li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
