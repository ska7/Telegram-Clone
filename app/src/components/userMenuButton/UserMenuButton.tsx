import "./userMenuButton.less";

import * as React from "react";
import MenuIcon from "icons/menu-icon.svg";
import RippleContainer from "../../containers/rippleContainer/RippleContainer";

interface IUserMenu {}

const UserMenuButton: React.FC<IUserMenu> = () => {
  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>): void => {
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

export default UserMenuButton;
