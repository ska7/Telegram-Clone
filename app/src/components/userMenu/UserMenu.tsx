import "./userMenu.less";

import * as React from "react";
import MenuIcon from "icons/menu-icon.svg";
import RippleContainer from "../../containers/rippleContainer/RippleContainer";

interface IUserMenu {}

const UserMenu: React.FC<IUserMenu> = () => {
  const handleMenuClick = (event: any): void => {
    console.log(event);
  };
  return (
    <div className="user-dropdown-menu">
      <button className="menu-icon-btn">
        <RippleContainer onClick={handleMenuClick}>
          <MenuIcon />
        </RippleContainer>
      </button>
    </div>
  );
};

export default UserMenu;
