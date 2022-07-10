import "./userMenuButton.less";

import * as React from "react";
import MenuIcon from "icons/menu-icon.svg";
import RippleContainer from "../../containers/rippleContainer/RippleContainer";

interface IUserMenu {
  handleButtonClick: () => void;
  isButtonActive: boolean;
}

const UserMenuButton: React.FC<IUserMenu> = ({
  handleButtonClick,
  isButtonActive,
}) => {
  return (
    <div className="user-dropdown-menu">
      <button className={`menu-icon-btn ${isButtonActive ? "active" : ""}`}>
        <RippleContainer onClick={handleButtonClick}>
          <MenuIcon />
        </RippleContainer>
      </button>
    </div>
  );
};

export default UserMenuButton;
