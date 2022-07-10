import "./sidebarHeaderStyles.css";

import * as React from "react";
import SearchField from "../../components/searchField/SearchField";
import UserMenuButton from "../../components/userMenuButton/UserMenuButton";

interface ISidebarHeader {
  isUserMenuOpen: boolean;
  toggleUserMenu: () => void;
}

const SidebarHeader: React.FC<ISidebarHeader> = ({
  isUserMenuOpen,
  toggleUserMenu,
}) => {
  return (
    <div className="side-layout-header">
      <UserMenuButton
        handleButtonClick={toggleUserMenu}
        isButtonActive={isUserMenuOpen}
      />
      <SearchField />
    </div>
  );
};

export default SidebarHeader;
