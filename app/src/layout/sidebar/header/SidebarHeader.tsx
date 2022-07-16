import "./sidebarHeaderStyles.css";

import * as React from "react";
import SearchField from "../../../components/searchField/SearchField";
import UserMenu from "../userMenu/UserMenu";

interface ISidebarHeader {}

const SidebarHeader: React.FC<ISidebarHeader> = ({}) => {
  return (
    <div className="side-layout-header">
      {/* Move user menu button inside user menu container and import it here */}
      <UserMenu />
      <SearchField />
    </div>
  );
};

export default SidebarHeader;
