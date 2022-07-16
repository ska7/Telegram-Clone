import "./sidebarHeaderStyles.css";

import * as React from "react";
import SearchField from "../../../components/searchField/SearchField";
import UserMenu from "../userMenu/UserMenu";

interface ISidebarHeader {}

const SidebarHeader: React.FC<ISidebarHeader> = ({}) => {
  return (
    <div className="side-layout-header">
      <UserMenu />
      <SearchField />
    </div>
  );
};

export default SidebarHeader;
