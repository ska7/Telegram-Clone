import "./userMenu.less";

import * as React from "react";
import { useToggleUserMenu } from "../../../hooks/useToggleUserMenu";

interface IUserName {}

const UserMenu: React.FC<IUserName> = () => {
  const { isUserMenuOpen, toggleUserMenu } = useToggleUserMenu();
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
