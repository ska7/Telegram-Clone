import * as React from "react";
import SearchField from "../../components/searchField/SearchField";
import UserMenu from "../../components/userMenu/UserMenu";
import "./sidebarHeaderStyles.css";

const SidebarHeader = () => {
  return (
    <div className="side-layout-header">
      <UserMenu />
      <SearchField />
    </div>
  );
};

export default SidebarHeader;
