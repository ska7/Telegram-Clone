import "./sideLayout.less";

import * as React from "react";
import { useCallback } from "react";
import SidebarHeader from "../../sidebarHeader/SidebarHeader";
import UserMenu from "../userMenu/UserMenu";
import { useAppDispatch, useAppSelector } from "../../../hooks/typedReduxHooks";
import { isUserMenuOpenSelector } from "../../../selectors/userMenuSelectors";
import { toggleUserMenuAction } from "../../../redux/actionCreators/userMenu";

const SideLayout = () => {
  const isUserMenuOpen = useAppSelector(isUserMenuOpenSelector);
  const dispatch = useAppDispatch();

  const toggleUserMenu = () => {
    dispatch(toggleUserMenuAction());
  };

  return (
    <div className="side-layout-container">
      <SidebarHeader
        isUserMenuOpen={isUserMenuOpen}
        toggleUserMenu={toggleUserMenu}
      />
      <UserMenu
        isUserMenuOpen={isUserMenuOpen}
        toggleUserMenu={toggleUserMenu}
      />
    </div>
  );
};

export default SideLayout;
