import * as React from "react";
import "./userMenu.less";
import MenuIcon from "icons/menu-icon";

const UserMenu = () => {
  return (
    <div className="user-dropdown-menu">
      <button className="menu-icon">
        <MenuIcon />
        <div className="ripple-container"></div>
      </button>
    </div>
  );
};

export default UserMenu;
