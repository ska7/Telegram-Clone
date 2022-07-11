import "./userMenuButton.less";

import * as React from "react";
import MenuIcon from "icons/menu-icon.svg";
import RippleContainer from "../../../containers/rippleContainer/RippleContainer";
import { useToggleUserMenu } from "../../../hooks/useToggleUserMenu";

interface IUserMenu {}

const UserMenuButton: React.FC<IUserMenu> = () => {
  const { isUserMenuOpen, toggleUserMenu } = useToggleUserMenu();

  return (
    <div className="user-dropdown-menu">
      <button className={`menu-icon-btn ${isUserMenuOpen ? "active" : ""}`}>
        <RippleContainer onClick={toggleUserMenu}>
          <MenuIcon />
        </RippleContainer>
      </button>
    </div>
  );
};

export default UserMenuButton;
