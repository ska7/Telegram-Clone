import "./sidebarHeaderStyles.css";

import * as React from "react";
import SearchField from "../../components/searchField/SearchField";
import UserMenuButton from "../../components/userMenu/userMenuButton/UserMenuButton";

interface ISidebarHeader {}

const SidebarHeader: React.FC<ISidebarHeader> = ({}) => {
  return (
    <div className="side-layout-header">
      <UserMenuButton />
      <SearchField />
    </div>
  );
};

export default SidebarHeader;
