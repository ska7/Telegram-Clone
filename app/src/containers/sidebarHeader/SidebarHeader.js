import * as React from "react";
import SearchField from "../../components/searchField/SearchField";
import UserMenuButton from "../../components/userMenuButton/UserMenuButton";
import "./sidebarHeaderStyles.css";

const SidebarHeader = () => {
  return (
    <div className="side-layout-header">
      <UserMenuButton />
      <SearchField />
    </div>
  );
};

export default SidebarHeader;
