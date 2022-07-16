import "./userMenu.less";

import * as React from "react";
import { useToggleUserMenu } from "hooks/useToggleUserMenu";
import UserMenuOption from "components/menuOption/UserMenuOption";
import Menu from "components/menu/Menu";
import MenuIcon from "icons/menu-icon.svg";
import Button from "components/button/Button";
import { userMenuOptions } from "data/userMenuOptions";

interface IUserName {}

const UserMenu: React.FC<IUserName> = () => {
  const { isUserMenuOpen, toggleUserMenu } = useToggleUserMenu();

  return (
    <>
      <Button
        containerCls="user-dropdown-menu"
        buttonCls="menu-icon-btn"
        onClick={toggleUserMenu}
        isActive={isUserMenuOpen}
      >
        <MenuIcon />
      </Button>
      <Menu isVisible={isUserMenuOpen} onBackdropClick={toggleUserMenu}>
        {userMenuOptions.map((option) => {
          return <UserMenuOption key={option.optionName} {...option} />;
        })}
      </Menu>
    </>
  );
};

export default UserMenu;
