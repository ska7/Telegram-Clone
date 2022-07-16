import "./userMenu.less";

import * as React from "react";
import { useState, useEffect } from "react";
import cls from "classnames";
import { useToggleUserMenu } from "../../../hooks/useToggleUserMenu";
import { userMenuOptionsMock } from "../../../__mocks__/userMenuOptionsMock";
import UserMenuOption from "./menuOption/UserMenuOption";

interface IUserName {}

const UserMenu: React.FC<IUserName> = () => {
  const { isUserMenuOpen, toggleUserMenu } = useToggleUserMenu();
  const [showContainer, setShowContainer] = useState(false);
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) return setFirstRender(false);

    if (!showContainer) {
      setShowContainer(true);
    } else {
      setTimeout(() => {
        setShowContainer(false);
      }, 201);
    }
  }, [isUserMenuOpen]);

  const containerCls = cls("user-menu-container", { show: showContainer });
  const menuClass = cls("user-menu-options", { open: isUserMenuOpen });

  return (
    <div className={containerCls}>
      <div className="backdrop" onClick={toggleUserMenu} />
      <div
        className={menuClass}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {userMenuOptionsMock.map((option) => (
          <UserMenuOption {...option} />
        ))}
      </div>
    </div>
  );
};

export default UserMenu;
